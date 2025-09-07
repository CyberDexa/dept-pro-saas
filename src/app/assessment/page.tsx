'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { 
  DocumentCheckIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ChartBarIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

interface DSPTQuestion {
  id: number;
  questionNum: string;
  question: string;
  description?: string;
  evidenceHint?: string;
  weight: number;
  questionType: string;
}

interface DSPTSection {
  id: number;
  sectionNum: number;
  title: string;
  description?: string;
  questions: DSPTQuestion[];
}

export default function DSPTAssessmentPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [sections, setSections] = useState<DSPTSection[]>([]);
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [completing, setCompleting] = useState(false);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  useEffect(() => {
    if (session) {
      fetchDSPTSections();
    }
  }, [session]);

  const fetchDSPTSections = async () => {
    try {
      const response = await fetch('/api/dspt/sections');
      if (response.ok) {
        const data = await response.json();
        console.log('Fetched sections:', data); // Debug log
        console.log('First section questions:', data[0]?.questions || 'No questions'); // Debug log
        setSections(data);
      } else {
        console.error('Failed to fetch DSPT sections, status:', response.status);
        const errorText = await response.text();
        console.error('Error response:', errorText);
      }
    } catch (error) {
      console.error('Error fetching DSPT sections:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleResponse = (questionId: number, response: string, evidence?: string) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: {
        response,
        evidence: evidence || '',
        isCompliant: response === 'yes'
      }
    }));
  };

  const nextQuestion = () => {
    if (sections.length === 0) return;
    
    const currentSectionData = sections[currentSection];
    if (currentQuestion < currentSectionData.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else if (currentSection < sections.length - 1) {
      setCurrentSection(prev => prev + 1);
      setCurrentQuestion(0);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    } else if (currentSection > 0) {
      setCurrentSection(prev => prev - 1);
      setCurrentQuestion(sections[currentSection - 1].questions.length - 1);
    }
  };

  const calculateProgress = () => {
    const totalQuestions = sections.reduce((sum, section) => sum + section.questions.length, 0);
    const currentQuestionIndex = sections.slice(0, currentSection).reduce((sum, section) => sum + section.questions.length, 0) + currentQuestion;
    return totalQuestions > 0 ? (currentQuestionIndex / totalQuestions) * 100 : 0;
  };

  const saveProgress = async () => {
    setSaving(true);
    try {
      const response = await fetch('/api/dspt/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          responses: responses,
          assessmentTitle: `DSPT Assessment - ${new Date().toLocaleDateString()}`
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Progress saved successfully:', data);
        // You could show a success toast here
        alert('Progress saved successfully!');
      } else {
        console.error('Failed to save progress');
        alert('Failed to save progress. Please try again.');
      }
    } catch (error) {
      console.error('Error saving progress:', error);
      alert('Error saving progress. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const getAllQuestions = () => {
    return sections.reduce((allQuestions: DSPTQuestion[], section) => {
      return [...allQuestions, ...section.questions];
    }, []);
  };

  const getCompletionStats = () => {
    const allQuestions = getAllQuestions();
    const answeredQuestions = allQuestions.filter(q => responses[q.id]?.response);
    const totalQuestions = allQuestions.length;
    
    return {
      totalQuestions,
      answeredQuestions: answeredQuestions.length,
      unansweredQuestions: totalQuestions - answeredQuestions.length,
      completionPercentage: totalQuestions > 0 ? (answeredQuestions.length / totalQuestions) * 100 : 0
    };
  };

  const completeAssessment = async () => {
    setCompleting(true);
    try {
      // First save any remaining progress
      await saveProgress();
      
      // Then complete the assessment
      const response = await fetch('/api/dspt/complete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          assessmentId: 'current_assessment' // This should be the actual assessment ID
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Assessment completed:', data);
        // Redirect to results page
        router.push(`/assessment/results?id=${data.assessment.id}`);
      } else {
        console.error('Failed to complete assessment');
        alert('Failed to complete assessment. Please try again.');
      }
    } catch (error) {
      console.error('Error completing assessment:', error);
      alert('Error completing assessment. Please try again.');
    } finally {
      setCompleting(false);
      setShowCompletionModal(false);
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <ClockIcon className="w-12 h-12 text-blue-600 mx-auto mb-4 animate-spin" />
          <p className="text-gray-600">Loading DSPT Assessment...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  if (sections.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ExclamationTriangleIcon className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No DSPT Questions Available</h2>
          <p className="text-gray-600">Please contact support to set up your DSPT assessment.</p>
        </div>
      </div>
    );
  }

  const currentSectionData = sections[currentSection];
  const currentQuestionData = currentSectionData.questions[currentQuestion];
  const currentResponse = responses[currentQuestionData.id];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900">DSPT Assessment</h1>
            <div className="flex gap-2">
              <button
                onClick={() => setShowCompletionModal(true)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2"
              >
                <ChartBarIcon className="w-4 h-4" />
                Complete Assessment
              </button>
              <button
                onClick={saveProgress}
                disabled={saving}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                {saving ? 'Saving...' : 'Save Progress'}
              </button>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>{Math.round(calculateProgress())}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                style={{ width: `${calculateProgress()}%` }}
              ></div>
            </div>
          </div>

          {/* Section info */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-1">
              Section {currentSectionData.sectionNum}: {currentSectionData.title}
            </h2>
            {currentSectionData.description && (
              <p className="text-gray-600 text-sm">{currentSectionData.description}</p>
            )}
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <span>Question {currentQuestion + 1} of {currentSectionData.questions.length}</span>
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="mb-6">
            <div className="flex items-start justify-between mb-4">
              <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                {currentQuestionData.questionNum}
              </span>
              <span className="text-sm text-gray-500">
                Weight: {currentQuestionData.weight}
              </span>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {currentQuestionData.question}
            </h3>
            
            {currentQuestionData.description && (
              <p className="text-gray-600 mb-4">{currentQuestionData.description}</p>
            )}
          </div>

          {/* Response Options */}
          <div className="space-y-4 mb-6">
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleResponse(currentQuestionData.id, 'yes')}
                className={`p-4 border-2 rounded-lg transition-all ${
                  currentResponse?.response === 'yes'
                    ? 'border-green-500 bg-green-50 text-green-700'
                    : 'border-gray-200 hover:border-green-300'
                }`}
              >
                <CheckCircleIcon className="w-6 h-6 mx-auto mb-2" />
                <span className="font-medium">Yes / Compliant</span>
              </button>
              
              <button
                onClick={() => handleResponse(currentQuestionData.id, 'no')}
                className={`p-4 border-2 rounded-lg transition-all ${
                  currentResponse?.response === 'no'
                    ? 'border-red-500 bg-red-50 text-red-700'
                    : 'border-gray-200 hover:border-red-300'
                }`}
              >
                <ExclamationTriangleIcon className="w-6 h-6 mx-auto mb-2" />
                <span className="font-medium">No / Non-compliant</span>
              </button>
            </div>
          </div>

          {/* Evidence Section */}
          {currentResponse?.response && (
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Evidence / Notes
              </label>
              <textarea
                value={currentResponse?.evidence || ''}
                onChange={(e) => handleResponse(currentQuestionData.id, currentResponse.response, e.target.value)}
                placeholder={currentQuestionData.evidenceHint || 'Provide evidence or notes for your response...'}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
              />
              {currentQuestionData.evidenceHint && (
                <p className="text-xs text-gray-500 mt-1">
                  Hint: {currentQuestionData.evidenceHint}
                </p>
              )}
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={previousQuestion}
              disabled={currentSection === 0 && currentQuestion === 0}
              className="flex items-center px-4 py-2 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:text-gray-900"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Previous
            </button>
            
            <button
              onClick={nextQuestion}
              disabled={!currentResponse?.response || (currentSection === sections.length - 1 && currentQuestion === currentSectionData.questions.length - 1)}
              className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>

        {/* Section Overview */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Assessment Sections</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {sections.map((section, index) => {
              const sectionCompleted = section.questions.every(q => responses[q.id]?.response);
              const sectionInProgress = section.questions.some(q => responses[q.id]?.response);
              
              return (
                <div
                  key={section.id}
                  className={`p-3 rounded-lg border text-center cursor-pointer transition-all ${
                    index === currentSection
                      ? 'border-blue-500 bg-blue-50'
                      : sectionCompleted
                      ? 'border-green-500 bg-green-50'
                      : sectionInProgress
                      ? 'border-yellow-500 bg-yellow-50'
                      : 'border-gray-200'
                  }`}
                  onClick={() => {
                    setCurrentSection(index);
                    setCurrentQuestion(0);
                  }}
                >
                  <div className="text-sm font-medium">Section {section.sectionNum}</div>
                  <div className="text-xs text-gray-600 mt-1">{section.title}</div>
                  <div className="mt-2">
                    {sectionCompleted ? (
                      <CheckCircleIcon className="w-4 h-4 text-green-600 mx-auto" />
                    ) : sectionInProgress ? (
                      <ClockIcon className="w-4 h-4 text-yellow-600 mx-auto" />
                    ) : (
                      <div className="w-4 h-4 bg-gray-300 rounded-full mx-auto"></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Completion Modal */}
      {showCompletionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Complete Assessment</h3>
              <button
                onClick={() => setShowCompletionModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            {(() => {
              const stats = getCompletionStats();
              return (
                <div className="mb-6">
                  <p className="text-gray-600 mb-4">
                    You are about to complete your DSPT assessment. Please review your progress:
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Total Questions:</span>
                      <span>{stats.totalQuestions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Answered:</span>
                      <span className="text-green-600">{stats.answeredQuestions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Remaining:</span>
                      <span className="text-red-600">{stats.unansweredQuestions}</span>
                    </div>
                    <div className="flex justify-between border-t pt-3">
                      <span className="font-medium">Completion:</span>
                      <span className="font-bold">{Math.round(stats.completionPercentage)}%</span>
                    </div>
                  </div>

                  {stats.unansweredQuestions > 0 && (
                    <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="text-yellow-800 text-sm">
                        <strong>Warning:</strong> You have {stats.unansweredQuestions} unanswered questions. 
                        These will be marked as non-compliant in your final report.
                      </p>
                    </div>
                  )}
                </div>
              );
            })()}

            <div className="flex gap-3">
              <button
                onClick={() => setShowCompletionModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Continue Assessment
              </button>
              <button
                onClick={completeAssessment}
                disabled={completing}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
              >
                {completing ? 'Completing...' : 'Complete Assessment'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

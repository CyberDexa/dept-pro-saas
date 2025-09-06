'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  CheckCircleIcon, 
  XCircleIcon, 
  ChartBarIcon,
  DocumentArrowDownIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';

interface SectionScore {
  sectionId: number;
  sectionTitle: string;
  totalQuestions: number;
  answeredQuestions: number;
  passedQuestions: number;
  sectionScore: number;
}

interface CompletionSummary {
  totalQuestions: number;
  answeredQuestions: number;
  passedQuestions: number;
  overallScore: number;
  passStatus: 'PASS' | 'FAIL';
  completedAt: string;
}

interface AssessmentResults {
  assessment: any;
  sectionScores: SectionScore[];
  completionSummary: CompletionSummary;
}

function AssessmentResultsContent() {
  const searchParams = useSearchParams();
  const assessmentId = searchParams.get('id');
  const [results, setResults] = useState<AssessmentResults | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (assessmentId) {
      fetchResults();
    } else {
      setError('No assessment ID provided');
      setLoading(false);
    }
  }, [assessmentId]);

  const fetchResults = async () => {
    try {
      const response = await fetch(`/api/dspt/results?id=${assessmentId}`);
      if (response.ok) {
        const data = await response.json();
        setResults(data);
      } else {
        setError('Failed to fetch assessment results');
      }
    } catch (err) {
      setError('An error occurred while fetching results');
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-green-100';
    if (score >= 60) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !results) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <XCircleIcon className="mx-auto h-16 w-16 text-red-500 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error</h2>
          <p className="text-gray-600">{error || 'Failed to load results'}</p>
        </div>
      </div>
    );
  }

  const { completionSummary, sectionScores } = results;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Dashboard
          </button>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                DSPT Assessment Results
              </h1>
              <p className="text-gray-600 mt-2">
                Completed on {new Date(completionSummary.completedAt).toLocaleDateString()}
              </p>
            </div>
            
            {/* Overall Status Badge */}
            <div className={`inline-flex items-center px-6 py-3 rounded-lg ${
              completionSummary.passStatus === 'PASS' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {completionSummary.passStatus === 'PASS' ? (
                <CheckCircleIcon className="h-6 w-6 mr-2" />
              ) : (
                <XCircleIcon className="h-6 w-6 mr-2" />
              )}
              <span className="font-semibold text-lg">
                {completionSummary.passStatus === 'PASS' ? 'COMPLIANT' : 'NON-COMPLIANT'}
              </span>
            </div>
          </div>
        </div>

        {/* Overall Summary */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Overall Summary</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {completionSummary.totalQuestions}
              </div>
              <div className="text-sm text-gray-600">Total Questions</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {completionSummary.answeredQuestions}
              </div>
              <div className="text-sm text-gray-600">Questions Answered</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {completionSummary.passedQuestions}
              </div>
              <div className="text-sm text-gray-600">Compliant Responses</div>
            </div>
            
            <div className="text-center">
              <div className={`text-3xl font-bold mb-2 ${getScoreColor(completionSummary.overallScore)}`}>
                {Math.round(completionSummary.overallScore)}%
              </div>
              <div className="text-sm text-gray-600">Overall Score</div>
            </div>
          </div>

          {/* Overall Score Bar */}
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Compliance Score</span>
              <span>{Math.round(completionSummary.overallScore)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className={`h-3 rounded-full transition-all duration-500 ${
                  completionSummary.overallScore >= 80 
                    ? 'bg-green-500' 
                    : completionSummary.overallScore >= 60 
                    ? 'bg-yellow-500' 
                    : 'bg-red-500'
                }`}
                style={{ width: `${completionSummary.overallScore}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Section Breakdown */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Section Breakdown</h2>
          
          <div className="space-y-4">
            {sectionScores.map((section) => (
              <div key={section.sectionId} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-gray-900">{section.sectionTitle}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreBgColor(section.sectionScore)} ${getScoreColor(section.sectionScore)}`}>
                    {Math.round(section.sectionScore)}%
                  </span>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 mb-3">
                  <div>
                    <span className="font-medium">{section.totalQuestions}</span> Total Questions
                  </div>
                  <div>
                    <span className="font-medium">{section.answeredQuestions}</span> Answered
                  </div>
                  <div>
                    <span className="font-medium">{section.passedQuestions}</span> Compliant
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      section.sectionScore >= 80 
                        ? 'bg-green-500' 
                        : section.sectionScore >= 60 
                        ? 'bg-yellow-500' 
                        : 'bg-red-500'
                    }`}
                    style={{ width: `${section.sectionScore}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
            <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
            Download Report
          </button>
          
          <button className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors">
            <ChartBarIcon className="h-5 w-5 mr-2" />
            View Detailed Analysis
          </button>
          
          <button 
            onClick={() => window.location.href = '/dashboard'}
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AssessmentResultsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading assessment results...</p>
        </div>
      </div>
    }>
      <AssessmentResultsContent />
    </Suspense>
  );
}

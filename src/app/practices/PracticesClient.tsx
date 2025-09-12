"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { 
  BuildingOfficeIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  UserGroupIcon,
  ChartBarIcon,
  EyeIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";

interface Practice {
  id: string;
  name: string;
  type: string;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
  _count: {
    members: number;
  };
}

interface Member {
  id: string;
  email: string;
  name: string | null;
  role: string;
  joinedAt: string;
}

export default function PracticesClient() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [practices, setPractices] = useState<Practice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showMembersModal, setShowMembersModal] = useState(false);
  const [selectedPractice, setSelectedPractice] = useState<Practice | null>(null);
  const [members, setMembers] = useState<Member[]>([]);
  const [membersLoading, setMembersLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    type: "GP Surgery"
  });
  const [memberEmail, setMemberEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.push("/login");
      return;
    }
    fetchPractices();
  }, [session, status, router]);

  const fetchPractices = async () => {
    try {
      const response = await fetch("/api/practices");
      if (!response.ok) {
        throw new Error("Failed to fetch practices");
      }
      const data = await response.json();
      setPractices(data);
    } catch (error) {
      console.error("Error fetching practices:", error);
      setError("Failed to load practices");
    } finally {
      setLoading(false);
    }
  };

  const fetchMembers = async (practiceId: string) => {
    setMembersLoading(true);
    try {
      const response = await fetch(`/api/practices/${practiceId}/members`);
      if (!response.ok) {
        throw new Error("Failed to fetch members");
      }
      const data = await response.json();
      setMembers(data);
    } catch (error) {
      console.error("Error fetching members:", error);
      setError("Failed to load members");
    } finally {
      setMembersLoading(false);
    }
  };

  const handleCreatePractice = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("/api/practices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to create practice");
      }

      await fetchPractices();
      setShowCreateModal(false);
      setFormData({ name: "", type: "GP Surgery" });
    } catch (error) {
      console.error("Error creating practice:", error);
      setError("Failed to create practice");
    } finally {
      setSubmitting(false);
    }
  };

  const handleUpdatePractice = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPractice) return;

    setSubmitting(true);
    try {
      const response = await fetch(`/api/practices/${selectedPractice.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to update practice");
      }

      await fetchPractices();
      setShowEditModal(false);
      setSelectedPractice(null);
      setFormData({ name: "", type: "GP Surgery" });
    } catch (error) {
      console.error("Error updating practice:", error);
      setError("Failed to update practice");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeletePractice = async (practiceId: string) => {
    if (!confirm("Are you sure you want to delete this practice?")) return;

    try {
      const response = await fetch(`/api/practices/${practiceId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete practice");
      }

      await fetchPractices();
    } catch (error) {
      console.error("Error deleting practice:", error);
      setError("Failed to delete practice");
    }
  };

  const handleAddMember = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPractice || !memberEmail.trim()) return;

    setSubmitting(true);
    try {
      const response = await fetch(`/api/practices/${selectedPractice.id}/members`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: memberEmail.trim() }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to add member");
      }

      await fetchMembers(selectedPractice.id);
      setMemberEmail("");
    } catch (error) {
      console.error("Error adding member:", error);
      setError(error instanceof Error ? error.message : "Failed to add member");
    } finally {
      setSubmitting(false);
    }
  };

  const handleRemoveMember = async (memberId: string) => {
    if (!selectedPractice) return;
    if (!confirm("Are you sure you want to remove this member?")) return;

    try {
      const response = await fetch(`/api/practices/${selectedPractice.id}/members`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ memberId }),
      });

      if (!response.ok) {
        throw new Error("Failed to remove member");
      }

      await fetchMembers(selectedPractice.id);
    } catch (error) {
      console.error("Error removing member:", error);
      setError("Failed to remove member");
    }
  };

  const openEditModal = (practice: Practice) => {
    setSelectedPractice(practice);
    setFormData({ name: practice.name, type: practice.type });
    setShowEditModal(true);
  };

  const openViewModal = (practice: Practice) => {
    setSelectedPractice(practice);
    setShowViewModal(true);
  };

  const openMembersModal = (practice: Practice) => {
    setSelectedPractice(practice);
    setShowMembersModal(true);
    fetchMembers(practice.id);
  };

  const closeModals = () => {
    setShowCreateModal(false);
    setShowEditModal(false);
    setShowViewModal(false);
    setShowMembersModal(false);
    setSelectedPractice(null);
    setFormData({ name: "", type: "GP Surgery" });
    setMemberEmail("");
    setError("");
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Practice Management</h1>
            <p className="mt-2 text-gray-600">
              Manage your healthcare practices and team members
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <button
              onClick={() => setShowCreateModal(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <PlusIcon className="h-4 w-4 mr-2" />
              Add Practice
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mt-4 bg-red-50 border border-red-200 rounded-md p-4">
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Error</h3>
                <div className="mt-2 text-sm text-red-700">{error}</div>
              </div>
            </div>
          </div>
        )}

        {/* Practices Grid */}
        <div className="mt-8">
          {practices.length === 0 ? (
            <div className="text-center py-12">
              <BuildingOfficeIcon className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No practices</h3>
              <p className="mt-1 text-sm text-gray-500">
                Get started by creating your first practice.
              </p>
              <div className="mt-6">
                <button
                  onClick={() => setShowCreateModal(true)}
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <PlusIcon className="h-4 w-4 mr-2" />
                  Add Practice
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {practices.map((practice) => (
                <div
                  key={practice.id}
                  className="bg-white overflow-hidden shadow rounded-lg"
                >
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <BuildingOfficeIcon className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            {practice.type}
                          </dt>
                          <dd className="text-lg font-medium text-gray-900">
                            {practice.name}
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-5 py-3">
                    <div className="text-sm">
                      <div className="flex items-center text-gray-500 mb-2">
                        <UserGroupIcon className="h-4 w-4 mr-1" />
                        {practice._count.members} member{practice._count.members !== 1 ? 's' : ''}
                      </div>
                      <div className="flex justify-between">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => openViewModal(practice)}
                            className="text-blue-600 hover:text-blue-900 flex items-center"
                          >
                            <EyeIcon className="h-4 w-4 mr-1" />
                            View
                          </button>
                          <button
                            onClick={() => openMembersModal(practice)}
                            className="text-green-600 hover:text-green-900 flex items-center"
                          >
                            <UserGroupIcon className="h-4 w-4 mr-1" />
                            Members
                          </button>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => openEditModal(practice)}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            <PencilIcon className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDeletePractice(practice.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <TrashIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Create Practice Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Create New Practice</h3>
                  <button
                    onClick={closeModals}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>
                <form onSubmit={handleCreatePractice}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Practice Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter practice name"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Practice Type
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="GP Surgery">GP Surgery</option>
                      <option value="Dental Practice">Dental Practice</option>
                      <option value="Pharmacy">Pharmacy</option>
                      <option value="Optometry">Optometry</option>
                      <option value="Mental Health">Mental Health</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={closeModals}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                    >
                      {submitting ? "Creating..." : "Create Practice"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Edit Practice Modal */}
        {showEditModal && selectedPractice && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Edit Practice</h3>
                  <button
                    onClick={closeModals}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>
                <form onSubmit={handleUpdatePractice}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Practice Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter practice name"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Practice Type
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="GP Surgery">GP Surgery</option>
                      <option value="Dental Practice">Dental Practice</option>
                      <option value="Pharmacy">Pharmacy</option>
                      <option value="Optometry">Optometry</option>
                      <option value="Mental Health">Mental Health</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={closeModals}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                    >
                      {submitting ? "Updating..." : "Update Practice"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* View Practice Modal */}
        {showViewModal && selectedPractice && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Practice Details</h3>
                  <button
                    onClick={closeModals}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Practice Name</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedPractice.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Practice Type</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedPractice.type}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Members</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedPractice._count.members} member{selectedPractice._count.members !== 1 ? 's' : ''}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Created</label>
                    <p className="mt-1 text-sm text-gray-900">
                      {new Date(selectedPractice.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={closeModals}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Members Modal */}
        {showMembersModal && selectedPractice && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-[600px] shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Manage Members - {selectedPractice.name}
                  </h3>
                  <button
                    onClick={closeModals}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                {/* Add Member Form */}
                <form onSubmit={handleAddMember} className="mb-6">
                  <div className="flex space-x-3">
                    <input
                      type="email"
                      required
                      value={memberEmail}
                      onChange={(e) => setMemberEmail(e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter member email"
                    />
                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                    >
                      {submitting ? "Adding..." : "Add Member"}
                    </button>
                  </div>
                </form>

                {/* Members List */}
                <div className="border rounded-md">
                  <div className="px-4 py-3 bg-gray-50 border-b">
                    <h4 className="text-sm font-medium text-gray-900">Current Members</h4>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {membersLoading ? (
                      <div className="px-4 py-8 text-center">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto"></div>
                      </div>
                    ) : members.length === 0 ? (
                      <div className="px-4 py-8 text-center text-gray-500">
                        No members yet. Add the first member above.
                      </div>
                    ) : (
                      members.map((member) => (
                        <div key={member.id} className="px-4 py-3 flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {member.name || "Unnamed User"}
                            </p>
                            <p className="text-sm text-gray-500">{member.email}</p>
                            <p className="text-xs text-gray-400">
                              {member.role} • Joined {new Date(member.joinedAt).toLocaleDateString()}
                            </p>
                          </div>
                          <button
                            onClick={() => handleRemoveMember(member.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <TrashIcon className="h-4 w-4" />
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    onClick={closeModals}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

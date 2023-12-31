export const mockMissions: Array<{
  id: number;
  name: string;
  resume_folder: string;
  skill_ids: Array<number>;
  total_experience_details: Array<any>;
  min_cgpa?: number;
  custom_selection_criteria?: string;
  report_url?: string;
  total_resumes?: number;
  processed_resumes?: number;
  status: string;
  created_at: number;
  updated_at: number;
}> = [];

for (let i = 1; i <= 50; i++) {
  mockMissions.push({
    id: i,
    name: `Mission ${i}`,
    resume_folder: `Folder ${i}`,
    skill_ids: [101, 102, 103],
    total_experience_details: [
      { op: "<=", value: 5 },
      { op: ">=", value: 2 },
    ],
    min_cgpa: 3.5,
    custom_selection_criteria: "Excellent communication skills required",
    report_url: `https://example.com/mission${i}/report`,
    total_resumes: 100,
    processed_resumes: 75,
    status: "ONGOING",
    created_at: 1693811510,
    updated_at: 1693811510,
  });
}

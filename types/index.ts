// import {  } from "@prisma/client";

export type newUser = {
  username?: string;
  role?: "ADMIN" | "PARTICIPANT";
  email: string;
  password: string;
};

// export type Condition = {
//   check: boolean;
//   element: React.ReactElement;
// };

// export type ProfileImageProps = {
//   name: string;
//   user: User;
// } & (UserProfileProps | TeamProfileProps);

// type TeamProfileProps = {
//   type: "team-profile-profile";
//   teamId: string;
// };
// type UserProfileProps = {
//   type: "profile-picture";
//   userId: string;
// };

// type Account = {
//   createdAt: string;
// };

// export type AnalyticsData = {
//   currentWeek: {
//     user: {
//       message: string;
//       users: User[];
//     };
//     weekly: {
//       message: string;
//       accounts: Account[];
//     };
//   };
//   weekBefore: {
//     user: {
//       message: string;
//       users: User[];
//     };
//     weekly: {
//       message: string;
//       accounts: Account[];
//     };
//   };
//   totalStudents: number;
//   totolTeams: number;
//   totalCoordinators: number;
// };

// export type StudentData = {
//   age: number;
//   classLevel: string;
//   createdAt: string;
//   description: string;
//   email: string;
//   firstName: string;
//   gardianName: string;
//   gardianPhone: string;
//   howYoulearnAboutUs: string;
//   id: string;

//   imageUrl: string;
//   lastName: string;
//   location: string;
//   paid: boolean;
//   phone: string;
//   region: string;

//   role: ROLE;
//   schoolName: string;
//   secondaryEmail: string;
//   somethingDone: string;
//   updatedAt: string;
//   userId: string;
//   username: string;
//   whyYouAttending: string;
// };

// export type teamData = {
//   profileId: string;
//   name: string;
//   members: memberData[];
//   imageUrl: string;
//   id: string;
//   userId: string;
// };

// type memberData = {
//   id: string;
//   role: string;
//   profileId: string;
// };

// export type userData = {
//   id: string;
//   username: string;
//   imageUrl?: string | null;
//   firstName?: string | null;
//   lastName?: string | null;
//   description?: string | null;
//   role: string;
//   profileId?: string;
//   requestId: string;
//   status: string;
// };

// export type teamProfile = {
//   imageUrl?: string;
//   name: string;
//   id: string;
// };

// export type stageQuestionsWithAnswers = {
//   id: string;
//   stageId: string;
//   question: string;
//   description: string;
//   answer: string;
//   questionId: string | null;
// };

// export type TeamData = {
//   id: string;
//   problemState: string | null;
//   proposeSolution: string | string | null;
//   profileId: string;
//   members: TeamMember[];
// };

// type TeamMember = {
//   id: string;
//   role: string;
//   profileId: string;
//   teamId: string;
// };

// // type userDetails = {
// //   username: string
// //   firstName: string | null,
// //   lastName: string | null,
// //   imageUrl: string | null
// // }

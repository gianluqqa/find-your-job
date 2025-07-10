import { IUser } from "src/interfaces/IUser";

const candidateArray: IUser[] = [
  {
    id: "1",
    name: "John Doe",
    email: "johndoe@gmail.com",
    country: "Spain",
    state: "Madrid",
    city: "Madrid",
    phone: "123456789",
    image: "./john-doe.jpg",
    skills: [{ id: "1", name: "HTML" }],
    studies: [
      {
        id: "1",
        institution: "University of Madrid",
        degree: "Bachelor of Science",
        field: "Computer Science",
        startDate: "2020",
        endDate: "2024",
      },
    ],
    certificates: [
      {
        id: "1",
        title: "Certificate of Completion",
        institution: "University of Madrid",
        graduationDate: "2024-06-01",
      },
    ],
    aptitudes: [{ id: "1", name: "Communication", level: "beginner" }],
    experience: [
      {
        id: "1",
        title: "Senior Software Engineer",
        company: "Google",
        startDate: "2021",
        endDate: "2024",
        location: "Madrid, Spain",
      },
    ],
    resume: {
      id: "1",
      url: "https://msnlabs.com/img/resume-sample.pdf",
      uploadedAt: "2025-07-10T10:00:00Z",
    },
    languages: [{ id: "1", name: "Spanish", level: "basic" }],
  },
];

export default candidateArray;
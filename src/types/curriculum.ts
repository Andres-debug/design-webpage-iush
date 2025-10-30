export interface Subject {
  name: string;
  color: string;
  description: string | null;
  type: string | null;
  subjectCredits: number | null;
  teacher: string | null;
  teacherRole: string | null;
  teacherImage: string | null;
}

export interface Level {
  level: string;
  credits: number;
  badge: number;
  /** Momento formativo: Fundamentación | Estructuración | Profundización | Proyección */
  moment: string;
  subjects: Subject[];
}

export type CurriculumData = Level[];


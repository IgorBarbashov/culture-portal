interface BiographyStage {
  startAt: string;
  endAt: string;
  description: string;
}

interface Work {
  startAt: string;
  endAt: string | null;
  genre: string;
  title: string;
}

interface Author {
  nativeId: number;
  nativeImage: string;
  name: string;
  birthDate: string;
  deathDate: string | null;
  birthCity: string;
  description: string;
  video: string;
  activityPlace: {
    longitude: number;
    latitude : number;
  };
  biography: BiographyStage[];
  works: Work[];
}
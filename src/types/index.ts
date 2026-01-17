export type AudienceId = '5yo' | 'senior' | 'ceo' | 'genz' | 'academic';

export interface ResultState {
    text: string | null;
    loading: boolean;
    error: string | null;
}

export interface Persona {
    id: AudienceId;
    icon: any;
    label: string;
}

export interface Theme {
    bgClass: string;
    bgPattern: string;
    bgSize: string;
    font: string;
    title: string;
    desc: string;
    resultsBg: string;
    icon: React.ReactNode;
    decor: React.ReactNode;
}

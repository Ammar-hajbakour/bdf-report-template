export class Report {
    companyName!: string
    result: Level = 'التطور'
    percentageResult!: number
    recommendation!: 'l1' | 'l2'|'l3'|'l4'
    evaluations!: SamModel[]
}

export const LEVELS = ['التأسيس', 'الممارسة', 'التطور', 'الاحترافية'] as const
export type Level = typeof LEVELS[number]



export type SamModel = {
    name: string,
    image: string,
    analysis: Record<string, string[]>
    level:Level,
    recommendation: 'l1' | 'l2'
    // notes: string[]
}


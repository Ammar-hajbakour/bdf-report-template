export class Report {
    companyName!: string
    result: Level = 'التطوير'
    percentageResult!: number
    
    evaluations!: SamModel[]
}

export const LEVELS = ['التأسيس', 'الممارسة', 'التطوير', 'الاحترافية'] as const
export type Level = typeof LEVELS[number]



export type SamModel = {
    name: string,
    image: string,
    analysis: Record<string, string[]>
    level:Level,
    recommendation: 'l1' | 'l2'
    // notes: string[]
}


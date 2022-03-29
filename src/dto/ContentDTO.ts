export interface ContentDTO {
    id: string
    title: string
    url: string
    sourceId: string
    createdAt: string
}

export interface ContentDetail extends ContentDTO{
    sentiments: { themeId: string, sentiment: string }[];
}

export interface ContentWithSentiment extends ContentDTO{
    themeId: string;
    sentiment: Sentiment
}

export type Sentiment = 'positive' | "negative" | "neutral";
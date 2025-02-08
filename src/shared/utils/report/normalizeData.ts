import type { ContentResult } from '@/entities/Report';

export function normalizeData(data: ContentResult) {
    return data.content
        .map((item) => ({ ...item }))
        .flat()
        .map((el) => ({ content: el.content.map((el) => el.content).flat(), title: el.title }))
        .flat();
}

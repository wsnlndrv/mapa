export type MapItemSource = 'CUSTOM_LOOT' | 'MINE' | 'BOSS_LOOT' | 'THRALL_CRAFT' | 'TW_MERCHANT';

export interface MapItem {
    name: string;
    source: MapItemSource[];
    sourceText?: string;
}

export const translateSource = (source: MapItemSource): string => {
    switch (source) {
        case "CUSTOM_LOOT":
            return "Custom Loot"
        case "MINE":
            return "Mined"
        case "THRALL_CRAFT":
            return "Thrall-Made"
        case "TW_MERCHANT":
            return "Faction Merchant"
        case "BOSS_LOOT":
            return "TW Boss Loot"
    }
}

export const translateSources = (sources: MapItemSource[]): string => {
    return sources.map(translateSource).join(", ");
}

export const Mythic = 'mythic' as const;
export const Uncommon = 'uncommon' as const;
export const Common = 'common' as const;
export const Rare = 'rare' as const;

export type Rarity = typeof Mythic | typeof Uncommon | typeof Common | typeof Rare;

export const toHumanReadable = (rarity: Rarity) => {
  switch (rarity) {
    case 'common':
      return 'コモン';
    case 'mythic':
      return '神話レア';
    case 'rare':
      return 'レア';
    case 'uncommon':
      return 'アンコモン';
  }
}
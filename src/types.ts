export type Server = {
  addresses: string[];
  location?: string;
  info: Info;
};

export type Info = {
  max_clients: number;
  max_players: number;
  passworded: boolean;
  game_type: string;
  name: string;
  map: Map;
  version: string;
  clients?: Client[];
  client_score_kind?: string;
  altameda_net?: boolean;
};

export type Map = {
  name: string;
  sha256?: string;
  size?: number;
};

export type Client = {
  name: string;
  clan: string;
  country: number;
  score: number;
  is_player: boolean;
  skin?: Skin;
  afk?: boolean;
  team?: number;
};

export type Skin = {
  name?: string;
  color_body?: number;
  color_feet?: number;
  body?: Body;
  marking?: Marking;
  decoration?: Decoration;
  hands?: Hands;
  feet?: Feet;
  eyes?: Eyes;
};

export type Body = {
  name: string;
  color: number;
};

export type Marking = {
  name: string;
  color?: number;
};

export type Decoration = {
  name: string;
  color?: number;
};

export type Hands = {
  name: string;
  color: number;
};

export interface Feet {
  name: string;
  color: number;
}

export interface Eyes {
  name: string;
  color?: number;
}

import { Document } from 'mongoose';

export interface Map extends Document {
  readonly title: string;
  readonly description?: string;
  readonly question?: string;
  readonly keywords?: [string];
  readonly created?: Date;
  readonly last_update?: Date;
  readonly author?: {
    readonly username: string;
    readonly link?: {
      readonly rel: string;
      readonly href: string;
    };
  };
  readonly permissions?: {
    readonly publicPermission: {
      readonly canView: Boolean;
      readonly canFork: Boolean;
      readonly canEdit: Boolean;
    };
  };
  readonly groups?: [
    {
      readonly group: {
        readonly name: string;
        readonly link: {
          readonly rel: string;
          readonly href: string;
        };
      };
      readonly permission?: {
        readonly canView: Boolean;
        readonly canFork: Boolean;
        readonly canEdit: Boolean;
      };
    }
  ];
  readonly users?: [
    {
      readonly group?: {
        readonly username: string;
        readonly link: {
          readonly rel: string;
          readonly href: string;
        };
      };
      readonly permission?: {
        readonly canView: Boolean;
        readonly canFork: Boolean;
        readonly canEdit: Boolean;
      };
    }
  ];
  readonly link?: {
    readonly rel: string;
    readonly href: string;
  };
  readonly last_version: any;
  readonly versions?: [string];
}

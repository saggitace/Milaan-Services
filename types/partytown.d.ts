declare module '@builder.io/partytown/react' {
  import * as React from 'react';

  export interface PartytownProps {
    forward?: string[];
  }

  export const Partytown: React.FC<PartytownProps>;
}

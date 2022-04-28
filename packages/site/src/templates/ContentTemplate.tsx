import * as React from "react";
import { ParentProps } from '../components/01-atoms/ParentProps';
import { TitledContent, TitledContentProps } from '../components/02-molecules/TitledContent';

export const ContentTemplate: React.FC<TitledContentProps & ParentProps> = ({ title, subTitle, children }) => {
  return (
    <TitledContent title={title} subTitle={subTitle}>
      {children}
    </TitledContent>
  );
}
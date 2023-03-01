import * as React from 'react';
import { PageProps } from 'gatsby';
import BaseButton from '@Components/common/BaseButton';
import IconButton from '@Components/common/IconButton ';
import AppLayout from '@Components/common/Layout';

const Main: React.FC<PageProps> = () => {
  return (
    <AppLayout>
      <BaseButton className="primary" onClick={() => console.log('')}>
        Primary
      </BaseButton>
      <BaseButton className="support" onClick={() => console.log('')}>
        Support
      </BaseButton>
      <BaseButton className="support-line" onClick={() => console.log('')}>
        SupportLine
      </BaseButton>
      <BaseButton className="outline" onClick={() => console.log('')}>
        Outline
      </BaseButton>
      <BaseButton className="tag" onClick={() => console.log('')}>
        Tag
      </BaseButton>
      <IconButton className="arrow-top" onClick={() => console.log('')} />
      <IconButton className="hamburger" onClick={() => console.log('')} />
      <IconButton className="share" onClick={() => console.log('')} />
    </AppLayout>
  );
};

export default Main;

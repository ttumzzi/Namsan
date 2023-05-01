import Layout from '@Components/common/Layout';
import NewsMain from '@Components/news/Main';
import NewsWrapper from '@Components/news/NewsWrapper';
import { NewsType } from '@Type/api.type';
import { GetServerDataProps, PageProps } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';

const Main: React.FC<PageProps> = props => {
  return (
    <Layout>
      <NewsWrapper
        title="남산소식"
        outerPadding="100px 90px"
        innerWidth="1200px"
      >
        <NewsMain />
      </NewsWrapper>
    </Layout>
  );
};

export default Main;

export const getServerData = async (props: GetServerDataProps) => {
  const {
    page,
    mediaType = 'all',
    keyword,
  } = props.query as {
    page?: string;
    mediaType?: NewsType;
    keyword?: string;
  };

  return { props: { page, mediaType, keyword } };
};

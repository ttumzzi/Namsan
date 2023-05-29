import Layout from '@Components/common/Layout/Layout';
import DetailPage from '@Components/work/DetailPage';
import { PageProps, graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { WrappedComponentProps, injectIntl } from 'gatsby-plugin-intl';
import React from 'react';

export interface SimpleMemberInfo {
  id: string;
  name: string;
  email: string;
  position: string;
}
export interface DetailProps {
  id: string;
  pageContext: PageContextProps;
  data: {
    work: workInfomation;
    mainMembers: { edges: SimpleMemberInfo[] };
    subMembers: { edges: SimpleMemberInfo[] };
  };
}

export interface PageContextProps extends WrappedComponentProps {
  language: 'ko' | 'en';
  mainMemberData: miniMember[];
  subMemberData: miniMember[];
  workInfo: {
    categoryTitle: string;
    description: string;
  }[];
  imagePath: string;
  id: string;
}

type workInfomation = {
  categoryTitle: string[];
  description: string[];
  imagePath: string;
};

export interface miniMember {
  bgImagePath: string;
  businessFields: string[];
  id: string;
  email: string;
  imagePath: string;
  language: 'ko' | 'en';
  name: string;
  order: number;
  position: string;
  image: IGatsbyImageData;
  bgImage: IGatsbyImageData;
}

const Detail = (props: WrappedComponentProps & DetailProps & PageProps) => {
  const { pageContext, data, location } = props;
  const newMainMembers = data.mainMembers.edges.map(({ node }: any) => ({
    ...pageContext.mainMemberData?.find(b => b.email === node.email),
    ...node,
  }));
  const newSubMembers = data.subMembers.edges.map(({ node }: any) => ({
    ...pageContext.subMemberData?.find(b => b.email === node.email),
    ...node,
  }));

  const subId = Number(location.hash?.slice(-2)) ?? -1;
  const infomation = data.work.categoryTitle?.map((title, index) => ({
    categoryTitle: title,
    description: data.work.description[index],
    isOpen: index === subId,
  }));

  return (
    <Layout route="workDetail">
      <DetailPage
        {...{
          ...pageContext,
          mainMemberData: newMainMembers,
          subMemberData: newSubMembers,
          workInfo: infomation,
          imagePath: data.work.imagePath,
          location,
          subId,
        }}
      />
    </Layout>
  );
};

export const query = graphql`
  query getWorkInformation(
    $id: String
    $language: String
    $mainMemberEmails: [String!]
    $subMemberEmails: [String!]
  ) {
    work(categoryId: { eq: $id }, language: { eq: $language }) {
      categoryTitle: categoryInfo
      description
      imagePath
    }
    mainMembers: allMembers(
      filter: { email: { in: $mainMemberEmails }, language: { eq: $language } }
      sort: { order: ASC }
    ) {
      edges {
        node {
          id
          name
          email
          position
        }
      }
    }

    subMembers: allMembers(
      filter: { email: { in: $subMemberEmails }, language: { eq: $language } }
      sort: { order: ASC }
    ) {
      edges {
        node {
          id
          name
          email
          position
        }
      }
    }
  }
`;

export default injectIntl(Detail);

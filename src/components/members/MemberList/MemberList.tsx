import { getMembers } from '@Api/member.api';
import { Member } from '@Interface/api.interface';
import { injectIntl } from 'gatsby-plugin-intl';
import React, { useEffect, useState } from 'react';
import { TLanguage } from '../../../type/intl.type';
import MemberItem from '../MemberItem';
import { getSearchParams } from '../MembersWrapper/MembersWarpper.helper';
import { IMemberListProps } from './MemberList.interface';
import * as S from './MemberList.style';

const MemberList = ({ intl }: IMemberListProps) => {
  const { name, position, businessField } = getSearchParams();

  const [memberList, setMemberList] = useState<Member[]>([]);

  useEffect(() => {
    (async () => {
      const params = {
        name,
        position,
        businessField,
        language: intl.locale as TLanguage,
      };
      const memberList = await getMembers(params);
      setMemberList(memberList);
      console.log(memberList);
    })();
  }, []);

  if (memberList.length === 0) {
    return (
      <S.EmptyMember>
        {intl.formatMessage({ id: 'members.empty_result' })}
      </S.EmptyMember>
    );
  }

  return (
    <S.MemberList>
      {memberList.map(member => (
        <MemberItem
          name={member.name}
          position={member.position}
          businessFields={member.businessFields}
          imagePath={member.imagePath}
        />
      ))}
    </S.MemberList>
  );
};

export default injectIntl(MemberList);

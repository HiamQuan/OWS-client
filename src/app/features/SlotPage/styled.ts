import styled from '@/app/styles/styled-components';

export const Wrapper = styled.div`
  width: 100%;
  /* border: 1px solid ${({theme}) => theme.color.light}; */
  /* padding: 15px; */
  /* color: ${({theme}) => theme.color.primary}; */
`;

export const ListTimeCreated = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  margin-top: 20px;
  h4 {
    width: 100%;
  }
`;

export const ElementTime = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  border: 1px solid ${({theme}) => theme.color.primary};
  border-radius: 4px;
  padding: 5px;
`;
export const ButtonBack = styled.button`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

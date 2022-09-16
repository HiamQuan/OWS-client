import {Helmet} from 'react-helmet-async';
import DemoClass from '../DemoClass';
import * as S from './styled';

type HomePageProps = {};

const HomePage = (props: HomePageProps) => {
  return (
    <>
      <S.Wrapper>
        <Helmet>
          <title>Trang chủ</title>
        </Helmet>
        <span>HomePage</span>
      </S.Wrapper>
      <DemoClass />
    </>
  );
};

export default HomePage;

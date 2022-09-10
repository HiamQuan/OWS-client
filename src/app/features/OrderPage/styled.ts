import {Button, Form, Input, Select, Typography} from 'antd';
import styled from 'styled-components';

const {Title} = Typography;

export const Wraper = styled.div`
  width: 100%;
`;

export const TitleReg = styled(Title)`
  text-align: left;
  font-weight: 25px;
  margin-bottom: 1em !important;
`;

export const FormCustom = styled(Form.Item)``;

export const LabelCustom = styled.label`
  font-size: 14px;
  line-height: 18px;
  color: #717171;
  font-weight: 700;
`;

export const SelectCustom = styled(Select)`
  width: ${(props: any) => props.widthEl || "92px" } !important;
  .ant-select-selector {
    height: 40px !important;
    padding: 4px 11px !important;
    border-radius: 5px !important;
  }
`;

export const InputCustom = styled(Input)`
  height: 40px;
  border-radius: 5px;
`;
export const ButtonCustom = styled(Button)`
  font-size: 19px;
  height: 54px;
  width: 714px;
  background: ${({theme}) => theme.color.primary};
  font-weight: 600;
  color: #fff;
  border-radius: 12px;
  :focus {
    background: ${({theme}) => theme.color.primary};
    color: #fff;
  }
  :hover {
    background: ${({theme}) => theme.color.primary};
    color: #fff;
  }
`;

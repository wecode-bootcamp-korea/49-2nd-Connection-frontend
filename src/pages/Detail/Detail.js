import React, { useEffect, useState } from 'react';
// import { API } from '../../config';
// import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Rating from '../../components/Rating/Rating';
import Counter from '../../components/Counter/Counter';
import Button from '../../components/Button/Button';
import DetailTab from './DetailTab/DetailTab';
import styled, { css } from 'styled-components';

const Detail = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);

  return (
    <>
      {loading && <Loading />}
      <main id="main">
        <div>
          <DetailWrap>
            <DetailTopSection>
              <ImageArea>
                <ImageAreaInnerWrap>
                  <img src="/images/products/milk.png" alt="productName" />
                  <Rating rating="0" />
                </ImageAreaInnerWrap>
              </ImageArea>
              <MetadataArea>
                <MetadataAreaInnerWrap>
                  <ProductTitle>
                    [커넥션 할인 특가] 50년 전통의 뼈해장국 대가 김인숙 님이
                    인정한 뼈해장국 밀키트 세트 (1팩 2인분)
                  </ProductTitle>
                  <MetadataTableWrap>
                    <MetadataTable>
                      <tbody>
                        <tr>
                          <th>원가</th>
                          <td>10,000원</td>
                        </tr>
                        <tr>
                          <th>할인가(할인율)</th>
                          <td>-1,000원(10%)</td>
                        </tr>
                        <tr>
                          <th>구매 가격</th>
                          <td>[D] 9,000원</td>
                        </tr>
                      </tbody>
                    </MetadataTable>
                  </MetadataTableWrap>
                  <Counter count={count} setCount={setCount} />
                  <ButtonGroup>
                    <Button
                      shape="solid"
                      color="neutral"
                      size="medium"
                      content="장바구니"
                    />
                    <Button
                      shape="solid"
                      color="primary"
                      size="medium"
                      content="바로구매"
                    />
                  </ButtonGroup>
                </MetadataAreaInnerWrap>
              </MetadataArea>
            </DetailTopSection>
            <DetailBottomSection>
              <DetailTab />
            </DetailBottomSection>
          </DetailWrap>
        </div>
      </main>
    </>
  );
};

const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailWrap = styled.div`
  margin-top: -40px;
`;

const DetailTopSection = styled.section`
  position: relative;
  display: flex;
  border-bottom: 1px ${props => props.theme.grayscaleC} solid;

  & > div {
    flex: 1;
    padding-top: 7vw;
    padding-bottom: 7vw;
  }
`;

const ImageArea = styled.div`
  ${FlexCenter};
`;

const ImageAreaInnerWrap = styled.div`
  ${FlexCenter};
  position: relative;
  width: 30vw;
  height: 30vw;
  border-radius: 4px;
  background-color: ${props => props.theme.grayscaleB};

  img {
    width: 20vw;
    height: 20vw;
    object-fit: contain;
  }
`;

const MetadataArea = styled.div`
  padding-left: 3vw;
  padding-right: 3vw;
  font-size: 24px;
`;

const ProductTitle = styled.h2`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  white-space: normal;
  font-size: 32px;
  line-height: 1.2;
`;

const MetadataAreaInnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 100%;
`;

const MetadataTableWrap = styled.div`
  position: relative;
`;

const MetadataTable = styled.table`
  table-layout: fixed;
  width: 100%;
  text-align: left;

  th,
  td {
    line-height: 1.4;
  }

  th {
    width: 35%;
  }

  tr:nth-child(2) {
    td {
      color: ${props => props.theme.secondaryColor};
    }
  }

  tr:last-child {
    td {
      color: ${props => props.theme.primaryColor};
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
`;

const DetailBottomSection = styled.section`
  position: relative;
`;

export default Detail;

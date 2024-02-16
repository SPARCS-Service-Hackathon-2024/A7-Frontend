import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { detail } from '../services/detail';
import map from '../assets/map-pin.svg';
import schoolIcon from '../assets/schoolBuilding.svg'; 
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 0 16px;
`;

const AptImage = styled.img`
    width: 100%;
    height: 295px;
`;

const SchoolImage = styled.img`
    width: 84px;
    height: auto;
    padding-top: 24px;
`;

const AptName = styled.div`
    font-family: 'Pretendard', sans-serif;
    font-weight: 700;
    font-size: 24px;
    white-space: pre-line;
    text-align: left;
    padding-top: 12px;
`;

const MapContainer = styled.div`
    display: flex;
    align-items: center;
    padding-top: 8px;
`;

const MapImage = styled.img`
    width: 16px;
    height: auto;
`;

const Address = styled.div`
    font-family: 'Pretendard', sans-serif;
    font-weight: 700;
    font-size: 14px;
    padding-left: 4px;
    white-space: pre-line;
`;

const SchoolName = styled.div`
    font-family: 'Pretendard', sans-serif;
    font-weight: 700;
    font-size: 19px;
    white-space: pre-line;
    text-align: left;
    height: 56px;
    margin-top: 12px;
`;

const Table = styled.div`
    display: table;
    width: 100%;
    margin-top: 8px;
`;

const TableRow = styled.div`
    display: table-row;
    &:after {
        content: '';
        display: block;
        clear: both;
    }
`;

const TableHeader = styled.div`
    display: table-cell;
    font-family: 'Pretendard', sans-serif;
    font-weight: 500;
    padding: 8px 0;
    text-align: left;
`;

const TableData = styled.div`
    display: table-cell;
    padding-left: 30px;
    font-family: 'Pretendard', sans-serif;
    font-weight: 500;
    text-align: left;
`;

function DetailPage() {
    const { house_id } = useParams();
    const [houseDetail, setHouseDetail] = useState(null);

    useEffect(() => {
        async function fetchDetail() {
            const response = await detail(house_id);
            if (response.success) {
                setHouseDetail(response.data);
                console.log(response.data);
            } else {
                console.error('상세 정보를 불러오는데 실패했습니다.');
            }
        }

        fetchDetail();
    }, [house_id]);

    if (!houseDetail) {
        return <div>Loading...</div>;
    }

    const renderRow = (label, value) => (
        <TableRow>
            <TableHeader>{label}</TableHeader>
            <TableData>{value}</TableData>
        </TableRow>
    );

    return (
        <>
            <AptImage src={houseDetail.image_url} alt="아파트 이미지" />
            <Container>
                <AptName>{houseDetail.aptName}</AptName>
                <MapContainer>
                    <MapImage src={map} alt="지도"/>
                    <Address>{houseDetail.exposureAddress}</Address>
                </MapContainer>
                <Table>
                    {renderRow('면적', `57.96m²`)}
                    {renderRow('특징', houseDetail.tagList.join(', '))}
                    {renderRow('보증금', `${houseDetail.aptHouseholdCount}만원`)}
                    {renderRow('월세', `72만원`)}
                    {renderRow('난방', `${houseDetail.aptHeatMethodTypeName}`)}
                    {renderRow('가스', `${houseDetail.aptHeatFuelTypeName}`)}
                </Table>

                <SchoolImage src={schoolIcon}/>
                <SchoolName>근처 학교를 알아봤어요</SchoolName>
                <Table>
                    {renderRow('근처학교', `${houseDetail.schoolName}`)}
                    {renderRow('학교 종류', `${houseDetail.organizationType}`)}
                    {renderRow('학교까지 걸어서', `${houseDetail.walkTime}분`)}
                </Table>
            </Container>
        </>
    );
}

export default DetailPage;

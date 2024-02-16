import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { detail } from '../services/detail';

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

    return (
        <div>
            <h2>{houseDetail.aptName}</h2>
            <p>주소: {houseDetail.exposureAddress}</p>
            <p>난방: {houseDetail.aptHeatMethodTypeName} ({houseDetail.aptHeatFuelTypeName})</p>
            <p>면적 - 임의로 처리</p>
            <p>보증금 - 임의로 처리</p>
            <p>특징:</p>
            <ul>
                {houseDetail.tagList && houseDetail.tagList.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
        </div>
    );
}

export default DetailPage;

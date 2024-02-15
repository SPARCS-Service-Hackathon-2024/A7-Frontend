export async function list(page) {
    try {
        const url = 'https://sarabwayu.com/api/house/list/' + page;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
        });

        const responseData = await response.json();

        if (response.ok) {
            return {
                success: true,
                status_code: response.status,
                message: responseData.message,
                data: responseData.data
            };
        } else {
            return {
                success: false,
                status_code: response.status,
                message: responseData.message || '서버 오류가 발생했습니다.'
            };
        }
    } catch (error) {
        return {
            success: false,
            status_code: 500,
            message: '네트워크 오류가 발생했습니다.'
        };
    }
}

export async function rec_list(page) {
    try {
        const url = 'https://sarabwayu.com/api/house/recommendation/list/' + page;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
        });

        const responseData = await response.json();

        if (response.ok) {
            return {
                success: true,
                status_code: response.status,
                message: responseData.message,
                data: responseData.data
            };
        } else {
            return {
                success: false,
                status_code: response.status,
                message: responseData.message || '서버 오류가 발생했습니다.'
            };
        }
    } catch (error) {
        return {
            success: false,
            status_code: 500,
            message: '네트워크 오류가 발생했습니다.'
        };
    }
}

export async function like(id) {
    try {
        const url = 'https://sarabwayu.com/api/house/like/' + id;

        const response = await fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
        });

        const responseData = await response.json();

        if (response.ok) {
            return {
                success: true,
                status_code: response.status,
                message: responseData.message,
                data: responseData.data
            };
        } else {
            return {
                success: false,
                status_code: response.status,
                message: responseData.message || '서버 오류가 발생했습니다.'
            };
        }
    } catch (error) {
        return {
            success: false,
            status_code: 500,
            message: '네트워크 오류가 발생했습니다.'
        };
    }
}
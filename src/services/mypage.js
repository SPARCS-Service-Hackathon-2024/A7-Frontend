export async function login(nickname, password) {
    try {
      const url = 'https://sarabwayu.com/api/auth/info';
  
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
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
  
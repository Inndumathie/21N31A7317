const postData = async () => {
    const url = 'http://20.244.56.144/test/auth'; //  API endpoint
    const data = {
        companyName: 'Zepto',
        clientID: '96df3a22-681a-4674-88b2-ecf789556448',
        clientSecret: 'EyMijfUMdnfkDsUb',
        ownerName: 'Indumathi Kandi',
        ownerEmail: 'kandiindumathi49@gmail.com',
        rollNo: '21n31a7317'
      };
  
    try {
      const response = await fetch(url, {
        method: 'POST', // HTTP method
        headers: {
          'Content-Type': 'application/json', // Specify the content type
        },
        body: JSON.stringify(data), // Convert the data to a JSON string
      });
  
      // Check if the request was successful
      if (response.ok) {
        const responseData = await response.json(); // Parse the JSON response
        console.log('Response:', responseData);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  postData();
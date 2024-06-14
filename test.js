const request = require('supertest');
describe('Shop Orders API', () => {
  it('ควรส่งคืนรหัสสถานะ 200 และข้อมูลคำสั่งซื้อเมื่อข้อมูลถูกต้อง', async () => {
    const response = await request('http://localhost:3000')
      .get('/shop/orders')
      .query({ filters: 'ขม', limit: 1, page: 1, date_start: '2024-05-20', date_end: '2024-05-29' })
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJvc3MxMjNkQGdtYWlsLmNvbSIsInN1YiI6MTAsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcxODM1MzU3OCwiZXhwIjoxNzE4MzY3OTc4fQ.HPdiqJT95PWr9E3CYn8vdcmE4u_D5uFTWG_48otCow4');

    expect(response.statusCode).toBe(200);
  });

  it('ควรส่งคืนรหัสสถานะ 401 เมื่อไม่มี Authorization', async () => {
    const response = await request('http://localhost:3000')
      .get('/shop/orders')
      .query({ filters: 'ขม', limit: 1, page: 1, date_start: '2024-05-20', date_end: '2024-05-29' });

    expect(response.statusCode).toBe(401);
  });

  it('ควรส่งคืนรหัสสถานะ 401 เมื่อ Authorization ผิด', async () => {
    const response = await request('http://localhost:3000')
      .get('/shop/orders')
      .query({ filters: 'ขม', limit: 1, page: 1, date_start: '2024-05-20', date_end: '2024-05-29' })
      .set('Authorization', 'Bearer invalidtoken');

    expect(response.statusCode).toBe(401);
  });

  it('ควรส่งคืนรหัสสถานะ 200 เมื่อไม่มี filters', async () => {
    const response = await request('http://localhost:3000')
      .get('/shop/orders')
      .query({ limit: 1, page: 1, date_start: '2024-05-20', date_end: '2024-05-29' })
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJvc3MxMjNkQGdtYWlsLmNvbSIsInN1YiI6MTAsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcxODM1MzU3OCwiZXhwIjoxNzE4MzY3OTc4fQ.HPdiqJT95PWr9E3CYn8vdcmE4u_D5uFTWG_48otCow4');

    expect(response.statusCode).toBe(200);
  });

  it('ควรส่งคืนรหัสสถานะ 200 เมื่อไม่มี limit', async () => {
    const response = await request('http://localhost:3000')
      .get('/shop/orders')
      .query({ filters: 'ขม', page: 1, date_start: '2024-05-20', date_end: '2024-05-29' })
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJvc3MxMjNkQGdtYWlsLmNvbSIsInN1YiI6MTAsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcxODM1MzU3OCwiZXhwIjoxNzE4MzY3OTc4fQ.HPdiqJT95PWr9E3CYn8vdcmE4u_D5uFTWG_48otCow4');

    expect(response.statusCode).toBe(200);
  });

  it('ควรส่งคืนรหัสสถานะ 200 เมื่อไม่มี page', async () => {
    const response = await request('http://localhost:3000')
      .get('/shop/orders')
      .query({ filters: 'ขม', limit: 1, date_start: '2024-05-20', date_end: '2024-05-29' })
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJvc3MxMjNkQGdtYWlsLmNvbSIsInN1YiI6MTAsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcxODM1MzU3OCwiZXhwIjoxNzE4MzY3OTc4fQ.HPdiqJT95PWr9E3CYn8vdcmE4u_D5uFTWG_48otCow4');

    expect(response.statusCode).toBe(200);
  });

  it('ควรส่งคืนรหัสสถานะ 400 เมื่อไม่มี date_start', async () => {
    const response = await request('http://localhost:3000')
      .get('/shop/orders')
      .query({ filters: 'ขม', limit: 1, page: 1, date_end: '2024-05-29' })
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJvc3MxMjNkQGdtYWlsLmNvbSIsInN1YiI6MTAsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcxODM1MzU3OCwiZXhwIjoxNzE4MzY3OTc4fQ.HPdiqJT95PWr9E3CYn8vdcmE4u_D5uFTWG_48otCow4');

    expect(response.statusCode).toBe(400);
  });

  it('ควรส่งคืนรหัสสถานะ 400 เมื่อไม่มี date_end', async () => {
    const response = await request('http://localhost:3000')
      .get('/shop/orders')
      .query({ filters: 'ขม', limit: 1, page: 1, date_start: '2024-05-20' })
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJvc3MxMjNkQGdtYWlsLmNvbSIsInN1YiI6MTAsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcxODM1MzU3OCwiZXhwIjoxNzE4MzY3OTc4fQ.HPdiqJT95PWr9E3CYn8vdcmE4u_D5uFTWG_48otCow4');

    expect(response.statusCode).toBe(400);
  });

  it('ควรส่งคืนรหัสสถานะ 400 เมื่อ date_start  กับ date_end  ไม่ถูกต้อง', async () => {
    const response = await request('http://localhost:3000')
      .get('/shop/orders')
      .query({ filters: 'ขม', limit: 1, page: 1, date_start: '2024-05-29', date_end: '2024-05-20' })
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJvc3MxMjNkQGdtYWlsLmNvbSIsInN1YiI6MTAsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcxODM1MzU3OCwiZXhwIjoxNzE4MzY3OTc4fQ.HPdiqJT95PWr9E3CYn8vdcmE4u_D5uFTWG_48otCow4');

    expect(response.statusCode).toBe(400);
  });
});
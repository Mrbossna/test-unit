const request = require('supertest');

describe('Admins API', () => {
  it('should return 200 and admin data when credentials are correct', async () => { // ควรส่งคืนรหัสสถานะ 200 และข้อมูลผู้ดูแลระบบเมื่อข้อมูลรับรองถูกต้อง
    const response = await request('http://localhost:3000')
      .post('/admins')
      .send({
        username: 'hello21',
        password: '12321',
        firstname: '21321',
        lastname: '232',
        role: 'admin'
      });

    expect(response.statusCode).toBe(200);
  });

  it('should return 400 when username is missing', async () => { // ควรส่งคืนรหัสสถานะ 400 เมื่อไม่มีชื่อผู้ใช้
    const response = await request('http://localhost:3000')
      .post('/admins')
      .send({
        password: '12321',
        firstname: '21321',
        lastname: '232',
        role: 'admin'
      });

    expect(response.statusCode).toBe(400);
  });

  it('should return 400 when password is missing', async () => { // ควรส่งคืนรหัสสถานะ 400 เมื่อไม่มีรหัสผ่าน
    const response = await request('http://localhost:3000')
      .post('/admins')
      .send({
        username: 'hello21',
        firstname: '21321',
        lastname: '232',
        role: 'admin'
      });

    expect(response.statusCode).toBe(400);
  });

  it('should return 400 when firstname is missing', async () => { // ควรส่งคืนรหัสสถานะ 400 เมื่อไม่มีชื่อจริง
    const response = await request('http://localhost:3000')
      .post('/admins')
      .send({
        username: 'hello21',
        password: '12321',
        lastname: '232',
        role: 'admin'
      });

    expect(response.statusCode).toBe(400);
  });

  it('should return 400 when lastname is missing', async () => { // ควรส่งคืนรหัสสถานะ 400 เมื่อไม่มีนามสกุล
    const response = await request('http://localhost:3000')
      .post('/admins')
      .send({
        username: 'hello21',
        password: '12321',
        firstname: '21321',
        role: 'admin'
      });

    expect(response.statusCode).toBe(400);
  });

  it('should return 400 when role is missing', async () => { // ควรส่งคืนรหัสสถานะ 400 เมื่อไม่มีบทบาท
    const response = await request('http://localhost:3000')
      .post('/admins')
      .send({
        username: 'hello21',
        password: '12321',
        firstname: '21321',
        lastname: '232',
      });

    expect(response.statusCode).toBe(400);
  });

  it('should return 400 when role is invalid', async () => { // ควรส่งคืนรหัสสถานะ 400 เมื่อบทบาทไม่ถูกต้อง
    const response = await request('http://localhost:3000')
      .post('/admins')
      .send({
        username: 'hello21',
        password: '12321',
        firstname: '21321',
        lastname: '232',
        role: 'invalid_role'
      });

    expect(response.statusCode).toBe(400);
  });

});
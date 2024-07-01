const request = require('supertest');
describe('Driver API', () => {
  it('ควรส่งคืนรหัสสถานะ 200 และข้อมูลผู้ขับขี่เมื่อข้อมูลถูกต้อง', async () => {
    const response = await request('http://localhost:3000')
      .post('/drivers')
      .send({
        email: 'hello21@gmail.com',
        password: '12321',
        firstname: '21321',
        lastname: '232',
        phonenumber: '0943680010',
        vehicle_id: 1
      });

    expect(response.statusCode).toBe(200);
  });

  it('ควรส่งคืนรหัสสถานะ 400 เมื่ออีเมลมีอยู่แล้ว', async () => {
    const response = await request('http://localhost:3000')
      .post('/drivers')
      .send({
        email: 'boss123d@gmail.com',
        password: '12321',
        firstname: '21321',
        lastname: '232',
        phonenumber: '0943680010',
        vehicle_id: 1
      });

    expect(response.statusCode).toBe(400);
  });

  it('ควรส่งคืนรหัสสถานะ 400 เมื่ออีเมลไม่ถูกต้อง', async () => {
    const response = await request('http://localhost:3000')
      .post('/drivers')
      .send({
        email: 'hello21@gmail.com',
        password: '12321',
        firstname: '21321',
        lastname: '232',
        phonenumber: '0943680010',
        vehicle_id: 1
      });

    expect(response.statusCode).toBe(400);
  });

  it('ควรส่งคืนรหัสสถานะ 400 เมื่อไม่มีอีเมล', async () => {
    const response = await request('http://localhost:3000')
      .post('/drivers')
      .send({
        password: '12321',
        firstname: '21321',
        lastname: '232',
        phonenumber: '0943680010',
        vehicle_id: 1
      });

    expect(response.statusCode).toBe(400);
  });

  it('ควรส่งคืนรหัสสถานะ 400 เมื่อไม่มีรหัสผ่าน', async () => {
    const response = await request('http://localhost:3000')
      .post('/drivers')
      .send({
        email: 'hello21@gmail.com',
        firstname: '21321',
        lastname: '232',
        phonenumber: '0943680010',
        vehicle_id: 1
      });

    expect(response.statusCode).toBe(400);
  });

  it('ควรส่งคืนรหัสสถานะ 400 เมื่อไม่มีชื่อจริง', async () => {
    const response = await request('http://localhost:3000')
      .post('/drivers')
      .send({
        email: 'hello21@gmail.com',
        password: '12321',
        lastname: '232',
        phonenumber: '0943680010',
        vehicle_id: 1
      });

    expect(response.statusCode).toBe(400);
  });

  it('ควรส่งคืนรหัสสถานะ 400 เมื่อไม่มีนามสกุล', async () => {
    const response = await request('http://localhost:3000')
      .post('/drivers')
      .send({
        email: 'hello21@gmail.com',
        password: '12321',
        firstname: '21321',
        phonenumber: '0943680010',
        vehicle_id: 1
      });

    expect(response.statusCode).toBe(400);
  });

  it('ควรส่งคืนรหัสสถานะ 400 เมื่อไม่มีเบอร์โทรศัพท์', async () => {
    const response = await request('http://localhost:3000')
      .post('/drivers')
      .send({
        email: 'hello21@gmail.com',
        password: '12321',
        firstname: '21321',
        lastname: '232',
        vehicle_id: 1
      });

    expect(response.statusCode).toBe(400);
  });

  it('ควรส่งคืนรหัสสถานะ 400 เมื่อไม่มีรหัสยานพาหนะ', async () => {
    const response = await request('http://localhost:3000')
      .post('/drivers')
      .send({
        email: 'hello21@gmail.com',
        password: '12321',
        firstname: '21321',
        lastname: '232',
        phonenumber: '0943680010'
      });

    expect(response.statusCode).toBe(400);
  });

  it('ควรส่งคืนรหัสสถานะ 400 เมื่อเบอร์โทรศัพท์ไม่ถูกต้อง', async () => {
    const response = await request('http://localhost:3000')
      .post('/drivers')
      .send({
        email: 'hello21@gmail.com',
        password: '12321',
        firstname: '21321',
        lastname: '232',
        phonenumber: '0943680010a',
        vehicle_id: 1
      });

    expect(response.statusCode).toBe(400);
  });
});
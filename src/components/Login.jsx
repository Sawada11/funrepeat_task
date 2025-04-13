import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

    // ログイン処理
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === 'admin' && password === 'password') {
      navigate('/customers');
    } else {
      alert('ユーザー名またはパスワードが間違っています');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="bg-white p-5 shadow-sm"
        style={{
          borderRadius: '25px',
          width: '100%',
          maxWidth: '450px',
          border: '1px solid #ccc',
        }}
      >
        <h5 className="text-center mb-5 fw-bold text-secondary">
          顧客管理デモアプリ
        </h5>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="ユーザー名を入力"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="パスワードを入力"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-flex justify-content-end mt-4">
            <button
                type="submit"
                className="btn btn-primary px-4 py-2 text-white"
            >
                ログイン
            </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

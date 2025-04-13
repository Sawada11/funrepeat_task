import React, { useState } from 'react';
import { customers } from '../data/Customers';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



const CustomerList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // nameとcompanyを検索
  const filteredCustomers = customers.filter((customer) =>
    customer.name.includes(searchTerm) || customer.company.includes(searchTerm)
  );

  //ログイン画面に遷移
  const handleLogout = () => {
    navigate('/'); 
  };
  return (
    <div className="container mt-4">
      {/* タイトル */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold">顧客管理</h4>
        <button className="btn btn-outline-secondary" onClick={handleLogout}>
          ログアウト
        </button>
      </div>

      {/* ナビゲーションバー */}
      <ul className="nav nav-tabs mb-4">
        {/* <li className="nav-item">
          <a className="nav-link active" href="#">案件</a>
        </li> */}
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">顧客一覧</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">顧客登録</a>
        </li> */}
      </ul>

      {/* 検索フォーム */}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="顧客名や会社名で検索"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

      </div>

      {/* テーブル */}
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-light">
            <tr>
              <th>名前</th>
              <th>会社名</th>
              <th>電話番号</th>
              <th>登録日</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer, index) => (
              <tr key={index}>
                <td>{customer.name}</td>
                <td>{customer.company}</td>
                <td>{customer.phone}</td>
                <td>{customer.date}</td>
              </tr>
            ))}
            {filteredCustomers.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center text-muted">
                  データが見つかりませんでした。
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerList;

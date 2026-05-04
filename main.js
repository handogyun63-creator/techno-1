class EmployerView extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        .view-container {
          background: #fff;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          margin-top: 2rem;
        }
        h2 {
          color: #3498db;
          border-bottom: 2px solid #f1c40f;
          padding-bottom: 0.5rem;
          margin-top: 0;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: bold;
        }
        .form-group input, .form-group textarea {
          width: 100%;
          padding: 0.8rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
        }
        button {
          background-color: #3498db;
          color: white;
          border: none;
          padding: 12px 24px;
          font-size: 1.1rem;
          border-radius: 5px;
          cursor: pointer;
        }
      </style>
      <div class="view-container">
        <h2>고용주: 채용 공고 등록</h2>
        <form id="job-posting-form">
          <div class="form-group">
            <label for="company-name">회사명</label>
            <input type="text" id="company-name" required>
          </div>
          <div class="form-group">
            <label for="job-title">직무</label>
            <input type="text" id="job-title" required>
          </div>
          <div class="form-group">
            <label for="job-description">업무 내용</label>
            <textarea id="job-description" rows="4" required></textarea>
          </div>
          <button type="submit">공고 등록</button>
        </form>
      </div>
    `;
  }
}

class StudentView extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
            display: block;
        }
        .view-container {
            background: #fff;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            margin-top: 2rem;
        }
        h2 {
            color: #2ecc71; /* Student view has a different accent color */
            border-bottom: 2px solid #f1c40f;
            padding-bottom: 0.5rem;
            margin-top: 0;
        }
        .section {
            margin-bottom: 3rem;
        }
        .form-group {
            margin-bottom: 1.5rem;
        }
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: bold;
        }
        .form-group input, .form-group textarea {
            width: 100%;
            padding: 0.8rem;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }
        .card {
            background: #fdfdfd;
            padding: 1.5rem;
            border: 1px solid #eee;
            border-radius: 8px;
            margin-bottom: 1rem;
        }
         button {
          background-color: #2ecc71;
          color: white;
          border: none;
          padding: 12px 24px;
          font-size: 1.1rem;
          border-radius: 5px;
          cursor: pointer;
        }
      </style>
      <div class="view-container">
        <!-- Self-Assessment Section -->
        <div class="section">
          <h2>필요 서류 자가 진단</h2>
          <div class="card">
            <p>아래 항목들을 확인하여 필요한 서류를 준비하세요.</p>
            <ul>
              <li>시간제취업확인서</li>
              <li>근로계약서</li>
              <li>시간제취업요건 준수 확인서</li>
            </ul>
          </div>
        </div>

        <!-- Document Generation Section -->
        <div class="section">
          <h2>정보 입력 (문서 자동 생성)</h2>
          <form id="student-info-form">
            <div class="form-group">
              <label for="student-name">이름</label>
              <input type="text" id="student-name" required>
            </div>
            <div class="form-group">
              <label for="student-id">외국인 등록번호</label>
              <input type="text" id="student-id" required>
            </div>
            <div class="form-group">
              <label for="student-address">주소</label>
              <input type="text" id="student-address" required>
            </div>
            <button type="submit">문서 생성</button>
          </form>
        </div>

        <!-- E-Signature Section -->
        <div class="section">
            <h2>생성된 문서 확인 및 전자서명</h2>
            <div class="card">
                <p>문서가 생성되면 이곳에서 확인하고 서명할 수 있습니다.</p>
                <!-- Signature pad will go here later -->
            </div>
        </div>
      </div>
    `;
  }
}

customElements.define('employer-view', EmployerView);
customElements.define('student-view', StudentView);

document.addEventListener('DOMContentLoaded', () => {
    const employerButton = document.getElementById('show-employer-view');
    const studentButton = document.getElementById('show-student-view');
    const employerview = document.querySelector('employer-view');
    const studentview = document.querySelector('student-view');
    const roleSelector = document.getElementById('role-selector');

    employerButton.addEventListener('click', () => {
        employerview.classList.remove('hidden');
        studentview.classList.add('hidden');
        roleSelector.classList.add('hidden');
    });

    studentButton.addEventListener('click', () => {
        studentview.classList.remove('hidden');
        employerview.classList.add('hidden');
        roleSelector.classList.add('hidden');
    });
});

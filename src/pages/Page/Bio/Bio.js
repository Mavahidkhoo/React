import React from "react";
import "./Bio.css"

function Bio() {
  return (
    <div class="container1">
      <header>
        <h1>محمدامین وحیدخو</h1>
        <p>ایمیل: M.a.vahidkhoo@gmail.com</p>
        <p>شماره : 09017335342</p>
      </header>
      <hr />
      <section>
        <h2>تحصیلات</h2>
        <ul>
          <li>
            <strong>رشته:</strong> مهندسی کامپیوتر گرایش نرم افزار
          </li>
          <li>
            <strong>دانشگاه:</strong>دانشگاه آزاد واحد نجف آباد
          </li>
        </ul>
      </section>
      <section>
        <h2>مهارت ها</h2>
        <ul>
          <li>زبان های برنامه نویسی:  ++JavaScript , C#(Console) , C</li>
          <li>فریم ورک  : React , Node.js</li>
          <li>Databases: MySQL</li>
        </ul>
      </section>
      <section>
        <h2>زبان</h2>
        <ul>
          <li>انگلیسی : متوسط</li>
        </ul>
      </section>
    </div>
  );
}

export default Bio;

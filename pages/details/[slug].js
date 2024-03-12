import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import styles from "./details.module.css";
import IndicatorBar from "@/Components/IndicatorBar";

function User() {
  const router = useRouter();
  const [dataai, setDataai] = useState(null);
  const [abn, setAbn] = useState(null);
  // let dataai = "The MCV (mean coc jweknwekfjwnkwnwnfjkwfnwkjfewkfenjwnkjewnfewjewjfnkwnkjwnnnnnnrwkjfewkfenjwnkjewnfewjfnkwnkjwnnnnnnrwkjfewkfenjwnkjewnfewjfnkwnkjwnnnnnnrpuscular volume) test measures the average size of red blood cells. It's part of a complete blood count (CBC) test. Red blood cells carry oxygen throughout the body. Larger-than-average red blood cells may indicate a vitamin B12 or folate deficiency. Smaller-than-average red blood cells may indicate iron deficiency. An MCV within the normal range suggests healthy red blood cell size."
  // let abn = "The MCV (mean corpuscular volume) test measures the average size of red blood cells. It's part of a complete blood count (CBC) test. Red blood cells carry oxygen throughout the body. Larger-than-average red blood cells may indicate a vitamin B12 or folate deficiency. Smaller-than-average red blood cells may indicate iron deficiency. An MCV within the normal range suggests healthy red blood cell size."

  // Access your API key (see "Set up your API key" above)
  const genAI = new GoogleGenerativeAI(
    "AIzaSyBqyovvBUxbpqkshLAxRi91eFB88kBF3dg"
  );

  async function main() {
    try {
      // For text-only input, use the gemini-pro model
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const slug = await router.query.slug;
      const prompt = `Describe ${slug} test which is a medical test in  a jargon-free language in around 80 words. dont use any bold letter or any letter that will show any special character in text.`;

      const result = await model.generateContent(prompt);
      const abn = await model.generateContent(
        `Common life reasons for abnormal results in ${slug} test in 2-3 lines. answer in points seperated by a ('-'). dont use any bold letter or any letter that will show any special character in text.`
      );
      const response = await result.response;
      const text = response.text();
      const abnresponse = await abn.response;
      const abntext = abnresponse.text();

      setDataai(text);
      setAbn(abntext);
    } catch (err) {
      setDataai("Api limit exceeded. Please try again in some time");
      setAbn("Api limit exceeded. Please try again in some time");
    }
  }

  useEffect(() => {
    main();
  }, []);
  return (
    <div className={styles.body}>
      <h2 className={styles.h2}>Health Advisory</h2>
      {/* {router.query.slug} */}
      <div className={styles.desc}>
        <div>
          <img src="/images/test.png"></img>
        </div>
        <div>
          <h4>{router.query.slug}</h4>
          {dataai ? dataai : <div className={styles.loading}>Loading...</div>}
        </div>
      </div>

      <div className={styles.details}>
        <b style={{ fontSize: "18px" }}>{router.query.slug}</b>{" "}
        {router.query.pv} {router.query.unit}
        <div className={styles.indicator}>
          {router.query.high === "Y" ? (
            <div className={styles.highyes}></div>
          ) : (
            <div className={styles.highno}></div>
          )}

          {parseFloat(router.query.pv) > parseFloat(router.query.ub)
            ? "High"
            : parseFloat(router.query.pv) < parseFloat(router.query.lb)
            ? "Low"
            : "Normal"}
        </div>
        <IndicatorBar
          pv={router.query.pv}
          ub={router.query.ub}
          lb={router.query.lb}
        ></IndicatorBar>
        <hr></hr>
        <div className={styles.symp}>
          <h3>Common reasons for abnormal results: </h3>

          <br />
          {abn ? (
            abn.split("-").map((element) => {
              return <div>{element.trim()}</div>;
            })
          ) : (
            <div className={styles.loading}>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default User;

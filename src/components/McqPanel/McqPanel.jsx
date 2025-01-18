import React from "react";

const McqPanel = () => {
  return (
    <div className="mcq-content">
      <div className="mcq-header">
        <span>1/10</span>
        <span>Harry Potter</span>
        <span className="harry-count">60</span>
      </div>
      <div className="mcq-question">
        Who directed 'Harry Potter and the Philosopher's Stone'?
      </div>
      <div className="mcq-options">
        <div className="option option-bg-1">Chris Columbus</div>
        <div className="option option-bg-2">Steven Spielberg</div>
        <div className="option option-bg-3"><img src="https://s3-alpha-sig.figma.com/img/dd01/d5b8/51701dcca1ea8074ebdb078cde70443a?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SB9P8RoS6jkVUIVC5Bodn606quqok~w1WUpwMycrTQZb1s~wQo85ZQnYt5d72vAaeyun4AtSytU7XCf-xNnsZdgevvkI0FhsrFn0beOJ9IoBw8ZbptOJNJIQy8LmdounxwZyYHQsfuPCUtF4O2diTdZOHhdudAajGeezcT6yStkx5ophhyqoaOYuienApGsn~l48783u4RfD4F0gO4XcnCE85yFkpXkcF5~UUA6K8PdO92cMJ-ewNGsvNnpe3~Pwo-0GL5LxhzYLG5mclUWEVa4cydKGKCuZJbAStTVTKQouGrkfRsLAboyFmMDqkra185As7lttKoA7izrKA2RmpA__" /> 
        <h4>Jackson</h4>
        </div>
        <div className="option option-bg-4"><img src="https://s3-alpha-sig.figma.com/img/7992/024f/3ef0464f8a29eaa27e882d30ddaa7114?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=irGzTXy97zEnshaD7ODiQXzYQuD7Hfed4gLjbvH~Le35Mg~~07oBApz8f88p7wSoMp41HD3L75qhZEs9H3WMxi41xcRaWOXZTAoLMH8mVjltZcacleuoFcVsb2d58IfoICrd0WfQwUAZrUWSl1CZ5aQaCvYV0n5aj0k~vVFDV151GYyPTdOV68QByrvKiTvH9T1ocIDtMRHCnqTjNQ6k72KeXdsZkEuiKlaNuoUn~9jwJrMdLJnZNZQJIglv9qamGfEnK6qIJDGxVZLInEG5OVxS0IL0HB46ARZUfyIxT0esqVe0855WqvxM~N6o0ZdmH1mi-4Gm8sRLbZ7dr9Tecg__" /> 
        <h4>Tim Burton</h4>
        </div>
      </div>
      <div className="mcq-actions">
        <button className="exit-btn">Exit</button>
        <button className="submit-btn">Submit</button>
      </div>
    </div>
  );
};

export default McqPanel;

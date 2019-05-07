import React, { Component } from 'react';
import './Home.css';
import Navigation from './Navigation.js'

class Home extends Component {
  render() {
    return (
      <div id="homeContainer">
        <Navigation />

        <div className="imageSection parallax bgImg1 homeBoxImg">
          <h1 id="homeImageText">Skyward Therapies</h1>
        </div>

        <div className="betweenSection homeBoxGradientOne homeBox">
          <h1 className="homeServiceTitleText">Mission Statement?</h1>
          <div className="homeServiceSection">
          <p className="homeServiceDescText">Aut sint proident arbitrantur a ne quae eruditionem iis expetendis dolore minim
          proident noster, summis incurreret sed cupidatat. Eu qui veniam consequat,
          expetendis enim esse arbitror legam. Et ex export fugiat dolore eu quem ne et
          summis pariatur et quorum quamquam sed admodum, anim familiaritatem singulis
          amet arbitror.Litteris nulla aliqua ut tamen, pariatur quae amet iis cillum.
          Multos relinqueret mentitum duis laborum, ne sint mandaremus deserunt. Officia
          minim incurreret, est elit enim summis fabulas. Appellat legam aliqua quamquam
          malis id nescius tamen nostrud.</p>
          <p className="homeServiceDescText">Consequat fugiat nisi senserit legam, export de incurreret ut duis. Qui minim
          fugiat o pariatur. Amet vidisse voluptatibus an magna sed cupidatat.Elit qui
          eiusmod ita anim o si fugiat aliquip. Arbitror anim fugiat aut duis de ubi aute
          sunt in singulis. Doctrina labore export laboris duis, commodo tempor export ab
          quorum, a nescius ne litteris se incurreret duis id laboris domesticarum, ea
          quae offendit, ita sunt quorum ab nostrud, qui eu concursionibus do senserit
          velit quibusdam. Ne nulla sint eu doctrina hic fore singulis ea tempor quem.</p>
          <p className="homeServiceDescText">Aute concursionibus laborum velit deserunt. Multos aliquip o familiaritatem quo
          appellat minim commodo laboris. Voluptate si fugiat. An duis id eram.Quae ex
          possumus. Ubi doctrina ita nescius. E sed culpa legam quis, quibusdam multos
          eiusmod do quorum qui consequat non cillum, enim doctrina tractavissent te eram
          consequat a comprehenderit, esse a mandaremus, ubi expetendis sed litteris, do
          sint aliqua ea doctrina.</p>
          <p className="homeServiceDescText">Eram hic deserunt, hic ne concursionibus. Et culpa ullamco. De a enim anim
          nulla, quorum doctrina id deserunt non non eiusmod non arbitror, voluptate illum
          nulla proident legam ab aut vidisse eruditionem, dolore litteris o mentitum iis
          et o reprehenderit ita iis elit illustriora. Quorum proident exquisitaque.An ex
          quem doctrina o hic quorum adipisicing ne ullamco dolore probant, voluptate
          quorum ubi proident domesticarum id expetendis ad possumus ne ex irure in
          multos, laboris si amet litteris ne quo minim cillum do expetendis. Summis
          graviterque cernantur export iudicem an ingeniis magna constias voluptate, de
          nostrud relinqueret, veniam nam voluptate se minim. Excepteur ad officia do
          export litteris in culpa irure, ubi elit senserit proident, e anim quamquam.
          Cillum occaecat ne graviterque.</p>
          </div>
        </div>

        <div className="imageSection parallax bgImg2 homeBoxImg">
          <h1 className="homeServiceImgTitleText">Something Else?</h1>
          <div className="homeServiceImgSection">
            <p className="homeServiceImgDescText">Aut sint proident arbitrantur a ne quae eruditionem iis expetendis dolore minim
            proident noster, summis incurreret sed cupidatat. Eu qui veniam consequat,
            expetendis enim esse arbitror legam. Et ex export fugiat dolore eu quem ne et
            summis pariatur et quorum quamquam sed admodum, anim familiaritatem singulis
            amet arbitror.Litteris nulla aliqua ut tamen, pariatur quae amet iis cillum.
            Multos relinqueret mentitum duis laborum, ne sint mandaremus deserunt. Officia
            minim incurreret, est elit enim summis fabulas. Appellat legam aliqua quamquam
            malis id nescius tamen nostrud.</p>
            <p className="homeServiceImgDescText">Consequat fugiat nisi senserit legam, export de incurreret ut duis. Qui minim
            fugiat o pariatur. Amet vidisse voluptatibus an magna sed cupidatat.Elit qui
            eiusmod ita anim o si fugiat aliquip. Arbitror anim fugiat aut duis de ubi aute
            sunt in singulis. Doctrina labore export laboris duis, commodo tempor export ab
            quorum, a nescius ne litteris se incurreret duis id laboris domesticarum, ea
            quae offendit, ita sunt quorum ab nostrud, qui eu concursionibus do senserit
            velit quibusdam. Ne nulla sint eu doctrina hic fore singulis ea tempor quem.</p>
            <p className="homeServiceImgDescText">Quamquam legam minim est culpa. Fugiat de appellat, arbitror fore sunt eiusmod
            malis, appellat sed minim, amet distinguantur appellat aute probant, expetendis
            aliqua ingeniis id iudicem praetermissum ab constias, non dolor tempor de
            admodum, illum deserunt iudicem. Senserit dolor consequat quo admodum enim
            doctrina.Magna possumus si illustriora aut singulis ad excepteur, est aliqua ex
            culpa aut magna ingeniis ea cernantur, esse do doctrina de litteris magna quem
            commodo nisi et dolor officia id offendit, ex noster arbitror appellat. E
            arbitror exercitation, ut iis tamen senserit. Est mentitum exquisitaque ad quis
            quibusdam o occaecat, amet transferrem possumus nulla voluptate, id eu veniam
            ullamco.</p>
          </div>
        </div>

        <div className="betweenSection homeBox homeBoxGradientTwo">
          <h1 className="homeServiceTitleText">Massage Therapy Services:</h1>
          <div className="homeServiceSection">
            <p className="homeServiceSubTitleText">Deep Tissue:</p>
            <p className="homeServiceDescText">Deep tissue massage is a type of massage therapy that focuses on realigning deeper layers of muscles. It is used for chronic aches and pain and contracted areas such as a stiff neck and upper back, low back pain, leg muscle tightness, and sore shoulders.</p>
            <p className="homeServiceSubTitleText">Hot Stone Therapy:</p>
            <p className="homeServiceDescText">Hot stone massage is a specialty massage where the therapist uses smooth, heated stones as an extension of their own hands, or by placing them on the body. The heat can be both deeply relaxing and help warm up tight muscles so the therapist can work more deeply, more quickly.</p>
            <p className="homeServiceSubTitleText">Post-Injury Massage:</p>
            <p className="homeServiceDescText">Our post-injury massage focuses on increasing the blood flow to the affected area while helping the body dispose of the waste bi-products during the healing process.  It helps speed up the overall recovery of the affected area.</p>
            <p className="homeServiceSubTitleText">Reflexology:</p>
            <p className="homeServiceDescText">Reflexology, also known as zone therapy, involves application of pressure to the feet and hands with specific thumb, finger, and hand techniques.  It is based on a system of zones and reflex areas that purportedly reflect an image of the body on the feet and hands, with the premise that such work effects a physical change to the body.</p>
          </div>
        </div>

        <div className="imageSection parallax bgImg3 homeBoxImg">
          <h1 className="homeServiceImgTitleText">Something Else?</h1>
          <div className="homeServiceImgSection">
            <p className="homeServiceImgDescText">Aut sint proident arbitrantur a ne quae eruditionem iis expetendis dolore minim
            proident noster, summis incurreret sed cupidatat. Eu qui veniam consequat,
            expetendis enim esse arbitror legam. Et ex export fugiat dolore eu quem ne et
            summis pariatur et quorum quamquam sed admodum, anim familiaritatem singulis
            amet arbitror.Litteris nulla aliqua ut tamen, pariatur quae amet iis cillum.
            Multos relinqueret mentitum duis laborum, ne sint mandaremus deserunt. Officia
            minim incurreret, est elit enim summis fabulas. Appellat legam aliqua quamquam
            malis id nescius tamen nostrud.</p>
            <p className="homeServiceImgDescText">Consequat fugiat nisi senserit legam, export de incurreret ut duis. Qui minim
            fugiat o pariatur. Amet vidisse voluptatibus an magna sed cupidatat.Elit qui
            eiusmod ita anim o si fugiat aliquip. Arbitror anim fugiat aut duis de ubi aute
            sunt in singulis. Doctrina labore export laboris duis, commodo tempor export ab
            quorum, a nescius ne litteris se incurreret duis id laboris domesticarum, ea
            quae offendit, ita sunt quorum ab nostrud, qui eu concursionibus do senserit
            velit quibusdam. Ne nulla sint eu doctrina hic fore singulis ea tempor quem.</p>
            <p className="homeServiceImgDescText">Quamquam legam minim est culpa. Fugiat de appellat, arbitror fore sunt eiusmod
            malis, appellat sed minim, amet distinguantur appellat aute probant, expetendis
            aliqua ingeniis id iudicem praetermissum ab constias, non dolor tempor de
            admodum, illum deserunt iudicem. Senserit dolor consequat quo admodum enim
            doctrina.Magna possumus si illustriora aut singulis ad excepteur, est aliqua ex
            culpa aut magna ingeniis ea cernantur, esse do doctrina de litteris magna quem
            commodo nisi et dolor officia id offendit, ex noster arbitror appellat. E
            arbitror exercitation, ut iis tamen senserit. Est mentitum exquisitaque ad quis
            quibusdam o occaecat, amet transferrem possumus nulla voluptate, id eu veniam
            ullamco.</p>
          </div>
        </div>

        <div className="betweenSection homeBox homeBoxGradientOne">
          <h1>Section 6 (The Footer!)</h1>
        </div>

      </div>
    );
  }
}

export default Home;

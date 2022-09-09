<template>
  <div class="about-bio flex-row">
    <div class="image-wrapper contained">
      <img src="/media/bio.png" alt="picture of me sarah" />
      <img src="/media/about.jpg" alt="picture of me sarah" />
      <img src="/media/about5.jpg" alt="picture of me sarah" />
    </div>
    <div class="text-wrapper">
      <p>
        Sarah Riazati (ree-AH-zuh-tee) (she / her / hers) is a documentary
        artist, filmmaker, UX designer and front-end web developer based in
        Durham, North Carolina. She is curious about time, relationships, and
        the ways things are made. She works based in local environments to
        reveal patterns of history, to redefine and reimagine archives, and tell
        "true stories" that build bridges between unexpected connections.
      </p>
      <p>
        After studying visual journalism at UNC-Chapel Hill, she gained
        experience in documentary storytelling as a video producer in New York
        City, where she produced hundreds of short-form documentaries,
        animations and commercials for clients like The FADER magazine,
        Converse, Mountain Dew, and Diageo and featuring actors and artists like
        Elijah Wood, Pharell, Joey Badass, and Matt and Kim. In 2015, she was a
        filmmaker-in-residence at Fabrica Research Centre in Treviso, Italy, and
        since 2017, she has been an adjunct lecturer at UNC-Chapel Hill and Duke
        University, teaching courses in filmmaking, video journalism, motion
        graphics, web development, creative coding and graphic design. In 2018,
        she was awarded a Princess Grace Award for Film to support her MFA
        graduate thesis film, monumental. She holds an MFA in Experimental and
        Documentary Art from Duke University.
      </p>
      <p>Get in touch: sarahriazati@gmail.com</p>
      <ContactFormNetlify
        :email="true"
        :name="true"
        :message="true"
        successRoute="/contact-success"
      />
    </div>
  </div>
</template>

<style>
.about-bio.flex-row > *:first-child {
  margin-right: 1rem;
}
.about-bio.flex-row .image-wrapper {
  flex: 0 0 30%;
}
.about-bio p + p {
  margin-top: 8px;
}
</style>
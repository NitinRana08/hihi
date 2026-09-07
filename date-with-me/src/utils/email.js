import emailjs from "@emailjs/browser";

export const sendProposalEmail = async ({
  date,
  time,
  place,
  message,
}) => {
  try {
    await emailjs.send(
      "service_89wgviv",
      "template_20rrkol",
      {
        date,
        time,
        place,
        message,
      },
      "MF3kOAjugwrr6G7xf"
    );

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
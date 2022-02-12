import firstImage from "./assets/images/file1.jpg";
import secondImage from "./assets/images/file2.jpg";
import thirdImage from "./assets/images/file3.jpg";
import fourthImage from "./assets/images/file4.jpg";

export const investmentData = [
  {
    id: 1,
    heading: "Invest your money in dollars",
    paragraph:
      "By holding your investments in a stable currency, your money grows more over time and retains its value better.",
    link: "Start Investing Now",
    className: "row",
    image: firstImage,
  },
  {
    id: 2,
    heading: "Choose what's best for you",
    paragraph:
      "Unlike other platforms, Rise lets you pick between stocks, US real estate and fixed income, according to your risk appetite. That way you can spread your risk and tap into different investments all in one place. ",
    link: "Start Investing Now",
    className: "row-reverse",
    image: secondImage,
  },
  {
    id: 3,
    heading: "Set goals and reach them",
    paragraph:
      "You can invest towards a goal on Rise--retirement, higher education, save for your home or travel budgets. Or create a goal of your own and invest periodically to achieve them. ",
    link: "Start Investing Now",
    className: "row",
    image: thirdImage,
  },
  {
    id: 4,
    heading: "We remember so you dont have to",
    paragraph:
      "Our Auto-invest feature makes it easy to stay consistent, even when you forget. Set a funding amount, frequency and payment method and Rise will automatically fund your investment, on schedule. ",
    link: "Start Investing Now",
    className: "row-reverse",
    image: fourthImage,
  },
];

import { Container } from "@/components/layout";
import { AdvantageItem } from "./AdvantageItem";
import styles from './Advantages.module.css'
import personalFinancesIcon from "../../../../assets/home/desktop/icon-personal-finances.svg";
import bankingAndCoverageIcon from "../../../../assets/home/desktop/icon-banking-and-coverage.svg";
import consumerPaymentIcon from "../../../../assets/home/desktop/icon-consumer-payments.svg";

export const Advantages = () => {
  return (
    <section className={styles.main}>
      <Container className={styles.innerContainer}>
        {advantagesData.map(({ icon, title, description }) => (
          <AdvantageItem
            key={title}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </Container>
    </section>
  );
};

const advantagesData = [
  {
    title: "Personal Finances",
    description:
      "Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.",
    icon: personalFinancesIcon,
  },
  {
    title: "Banking & Coverage",
    description:
      "With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.",
    icon: bankingAndCoverageIcon,
  },
  {
    title: "Consumer Payments",
    description:
      "It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.",
    icon: consumerPaymentIcon,
  },
];

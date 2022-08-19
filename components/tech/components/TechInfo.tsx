import { useTranslation } from "next-i18next";

function TechInfo() {
  const { t } = useTranslation("projects");
  return (
    <div>
      <h2 className="my-4">{t("h2-tech")}</h2>
      <p>{t("info-tech")}</p>
    </div>
  );
}

export default TechInfo;

type SkillValue = Readonly<
  "react" | "ts" | "ionic" | "astro" | "php" | "mysql"
>;

type Skill = Readonly<{
  value: SkillValue;
  label: string;
  svg: string;
}>;

type Work = Readonly<{
  title: string;
  link?: string;
  skills?: SkillValue[];
  description?: string;
}>;

type Social = Readonly<{
  link: string;
  svg: string;
  ariaLabel: string;
}>;

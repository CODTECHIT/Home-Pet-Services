interface AmoebaProps {
  className?: string;
  color?: string;
  variant?: 1 | 2 | 3 | 4;
}

const PATHS = {
  1: "M421.3,310.7Q403,371.3,348.5,407Q294,442.7,234.5,427.7Q175,412.7,128.5,372.8Q82,332.8,73.5,272.4Q65,212,90.5,154.5Q116,97,173,68Q230,39,290,55.5Q350,72,394.5,113Q439,154,438.5,217Q438,280,421.3,310.7Z",
  2: "M431.5,304Q394,358,355,397.5Q316,437,256,442.5Q196,448,140.5,414Q85,380,68.5,318Q52,256,69,194Q86,132,140,93Q194,54,259.5,55.5Q325,57,375.5,99.5Q426,142,447,199Q468,256,431.5,304Z",
  3: "M413,302Q392,348,355,386Q318,424,259,432.5Q200,441,151,407Q102,373,80,317.5Q58,262,69.5,202Q81,142,128,103.5Q175,65,237,67Q299,69,348,103.5Q397,138,422.5,197Q448,256,413,302Z",
  4: "M438,303.5Q411,351,372,389.5Q333,428,275,438Q217,448,162.5,418Q108,388,79.5,335Q51,282,57,219.5Q63,157,108.5,114Q154,71,217,57.5Q280,44,338.5,72.5Q397,101,432.5,153.5Q468,206,449.5,253Q431,300,438,303.5Z",
};

export const Amoeba = ({ className = "", color = "var(--brand-blue-soft)", variant = 1 }: AmoebaProps) => (
  <svg
    viewBox="0 0 500 500"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={`pointer-events-none ${className}`}
  >
    <path d={PATHS[variant]} fill={color} transform="translate(0)" />
  </svg>
);

export const PawPattern = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={`pointer-events-none ${className}`} aria-hidden="true">
    <g fill="currentColor">
      <ellipse cx="50" cy="60" rx="14" ry="11" />
      <ellipse cx="28" cy="38" rx="6" ry="8" />
      <ellipse cx="44" cy="28" rx="6" ry="9" />
      <ellipse cx="62" cy="28" rx="6" ry="9" />
      <ellipse cx="78" cy="38" rx="6" ry="8" />
    </g>
  </svg>
);

#!/usr/bin/env node

import _ from "lodash";
export default function solution(content) {
  const info = content
    .split("\n")
    .slice(1)
    .map((el) => el.slice(0, -1).split(","))
    .slice(0, -1);

  // Шаг 1:
  console.log(`Count: ${info.length}`);

  // Шаг 2:
  const cities = _.uniq(info.map((el) => el[7]))
    .sort()
    .join(", ");
  console.log(`Cities: ${cities}`);

  // Шаг 3:
  const humidities = info.map((el) => +el[3]);
  console.log(
    `Humidity: Min: ${Math.min(...humidities)}, Max: ${Math.max(...humidities)}`
  );

  // Шаг 4:
  const hottestDay = info.reduce((acc, el) => (+el[1] > +acc[1] ? el : acc));
  console.log(`HottestDay: ${hottestDay[0]} ${hottestDay[7]}`);

  // Шаг 5:
  const maxTemps = _.groupBy(info, (el) => el[7]);
  const avgTemps = Object.entries(maxTemps).map(([city, temps]) => [
    city,
    _.meanBy(temps, (el) => +el[1]),
  ]);
  const hottestCity = _.maxBy(avgTemps, (entry) => entry[1]);
  console.log(`HottestCity: ${hottestCity[0]}`);
}

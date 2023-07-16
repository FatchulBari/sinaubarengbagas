import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl flex flex-col justify-center items-center bg-red-600">
  <figure><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQSEhgSEhIYGBgYGBgYGBgSEhgYGBIYGBgaGhgaGhgbIS0kGx0qIRgZJTcmKy4xNDQ0GiM6PzozPi0zNDEBCwsLEA8QGhISHTMhISMzMzMzMzMzMzEzMzMzMzMzMTEzMzMzMzMxMzMzMTMzMTUzMzMzMzMzMzMzMzM8MzE0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABIEAACAQIDBQQECQoFBAMBAAABAgMAEQQSIQUGMUFREyJhcTKBkaEHFEJSU2KCsdEVIzNykqLB0uHwFkOTo+Ikc7LCVYOzVP/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACIRAQEAAgICAgIDAAAAAAAAAAABAhEDIRIxBEETUSJhsf/aAAwDAQACEQMRAD8A22WiIp21EVrshqjFHloAUBg0d6K1HQKBoXpNKFAYNHek0dAq9Hek0KBV6O9IpVAq9C9JoUC70d6RehegXejvSL0L0C70L0i9C9A5ehem70L0Dl6F6bvRXoHM1FekXor0Dl6FNZqOgTQtSrULUCCtFanLURFAi1Fal5aTagK1CjtQtQChRUKBQo6TQvQKpVIvQvQLoUi9C9AujpF6F6BdHSL0L0CqFJvQvQKoUm9FegVQpOahmoFGkk0RaiLUB0KTehQO0KIUdAdC1ChQERREUqiZgBcmwGpJ4CgRaitUbA7Xw87MkM6OyekI5AxXW19OVTLUCCKKlkURWgTRUq1ERQFejzUVqFAd6O9IoUCr0d6TehQKvQvSKOgVekPKFGp4mw6knkBzqHtTaMeFiaaVsqKPWx5Ko5seQrC7v7elxmMEsgsqhzHGNVRSFTieLkOwJ8TyrNuoSbdK5X04X0ZTbzsaK9Urx5hnVcrKbgo1vMaVY4aXMoNYwz31VuOkm9Fek3oXrqg70RNFehQHehSb0KB4GlXpANHegDzKpAJ1IJA52Frny1GviKNJA3A1jt8tuPgsTC4AKyIysrGwbKwIs3yWGc+BBOh0sWz99sONZEkTqSqWsOFu9f3Vzyyyl6iyStlPMsaNI7BVVSzMeCqouSfUK4vvlvhJjXMcZKYcaBeBl+s/h0Xlz14avejeqLGYZ8Lh45QZAoDsqZLZgbHKxazWtw51zqXApG7JJIt1Zl0vrY21Auy+seurLaaI2RtOTCTJPEbMh4H0XU+krfVI/HiBXd9g7YjxsCzxHQ6MpPejcekjeP3gg864W+BVo2eN81rngRcKCWGtje2t7C/C3OnN3tvS4GTtIjcG2dCe64HXoeIv41Yj0DRWqNsvaEeJhSeM3R1DC/EdVPiDcHxFSq0E2oiKXRUDdqFqVaiIoCtRWo7ULUBUKO1Zne3e2PALkADzMLqgOij5zkcB4cT7SMjS1T7e3kw2CTNM4zH0USzO/kOQ8TYVyeHE4/a+IWDtWYtc5QxWKNL6sVXTKLga3JuBqTXWd1t1sHggI41DTsjM0kqAsVRgpIHyEzEaDiBqSdau/wBGnF94Nvy46UySt3QTkRT3I16DqercT7qutxJkE6K4JVmdDY29JQU9ZcKPXWj+FTY0KwLilRElEvZP2YAEoKkgsABdhlBvbmRqLVznATZWtewJBvc91h6J9/qNjyrF7a9O8RyRRkWjtrqWGo9tSpiApePXmQOfl41gMHvXLHGoxSdopGjGwcefsvrrUTaHwiiMlMJCCObTE2vzyqp1HjcVx8btrbo8GKV9Adeh52428uY5esEv1xiTfzEMSTHGCea5wQQLAjvcR141qPg73gxGLkkSZ8yoikZrZixa172uRYHryrvjb9udjfUKTehethVCkXoUDoNKFIFHQcu+F+Y9rh05BHb1syg/+Irn6SkcCR5Eiuh/C6n5zDN1SVfYyH/2rnLLWL7IfWUghr3KkEZtdQbitJsuOAYt+27MAwO2H+MH8yZrAJ2hOmXuvx0vassjVYYg54Ufml0by0y28BpfqX86KudoSxDEhYOz1iQyfF79h8YQMzlB8wLrYaFhpRbL3LxmLc/F4D2d9JJDljAOoGY+la9jlzag1ud1N08BhcJHtPGP2lo0m72sSlgGUKgF3YEhdSbsOA4B3/F2M2pKuG2cVwyPrncK0ixKDmex0FiAuVQdTo2hNBbbn7nzbPjaN8Wrh+92SoQqNpco5a5HXui+mg53zAg2NSsDslcPEUiJaQ+lLOWkeRvnyNcF/wBW4A4CwrE7x4vGbOmXFSTfGcIzZJgI0VsOxNrrk1sPEnmDqQasRq6KkRSK6h0IZWAZSNQwIuCPC1OVoFQo6FAi1Fal0l+BoM/vVtpsNgpMREQSCEU3DDMWyk9O6b6cyttK4XNKzszuxZmJZmY3LE8STzNdk2jgTiNgqmpcYeKThqWRUdx5ko48zXF6xSOnfA5AhGKdsunYoc1jZCXYixBvmIUW+rV0+yJvywHkLTwoVzGyL2ecO6KyJbOqvlJNvlKTXP8AcDeYbPxDdoCYZVCSBeK2JKSAcSVuwsNbMba2rqWI3x2fDH2oxivYHKkdi5BUWQIACNQOIAHDQVvDO4719wym4xnwu7RLNBhrnQPO6kk2Z2KoNeBAVtBp3qwOBIBMjC4QXseDHgoPhf8AhT+3NqyYzESYiTRnOi3uEUCyqD4ADz1POoh0ite2ZifMAW++uarGHapcsJDmL6NrowPI66dAb8h+sIWOw2QgrfK17ZrZlItdTbjoym9hcMNBwq52vj4J4I0iLZzk7jooGFyqyyKkg9KNu62Xlbzqn2jPnYKPk5ifEsbn7hrzoIpNbP4NZzHOTxD5UsOpdFv6g5Pq8KxZroPwXYIySdoR3Y2Z/tZAgv1BzMfNKDp9qFqftRZK6IYtQp7LQoGwaO9IBpMsoRWdjZVBYnoALn7qDk/wobR7TGCIcIUCn9d7O3uyD1GsdTuPxjTyvM3F3Zj4ZjcD1Cw9VMVhREWqfs6QHNGxsHHE8Aw1Btz625kLUG9GrEG4NiNQRxBFBebC2XLjJhgxIUVQ7vnZmSIKLu4S9ideXG/Gus4D8n7Cw6HP208i5lOnaSgi5Kgm0cdh9/pGuRQY2SNlxmHcpIgs5S11uMt8pFipBtbUWt0a13u/snEbYnaabFFcpRDI0ecgkMyKqKVCqApPIa8Dc2DbbB2ltDbcrdoThsGjWdYCyvMw/wArtfSP1iuWw04nSTvtNipITs7ZmCYxBckkioqRhQLdnFnIDdCwvbgNbkTE2xs7YyHDRu0kpOZo0fO5aw1YXyppbTja2hAvUzc3eKfaReZkjihRsixq/aSuxAIZ20CJYggAd7iDYd4io3DwWMgwnY4uFk7NrIWdWLI12tZWNsp08rdK0d6G28Jj5XC4WaGBB6TuhldyeQTRVUeZJ8Lat4t0gaOKSdO1ddFYqjSlQMzIt+vIVsO3oXpvNQzUDl6JzpSb0L0FTsVsjy4RuCs0sV/lRSsWYfYkzi3JWTrXIN9NgHBYkgD8292jPQX7yHxUm3lY8663tuBwUxEQvJESwUf5qMLSR/aAuPrKp5VX7z4OPaeALRnM1hJGbWIcA6EHhmF1IPA+VZsHEqO9F/etCsqO1WcckcU8WdcyRlC6gC7c2tfS9rG3W/nUHDC8ifrL7AdfdWr3RweFxE0i4l4Q3aIAMTIYw0WYiQowt+dAC2HHpbWqNRtrcuLGqmN2ZIjBkAZNFzMPlX4K9tGU24ca51tXYuJgdjNhpUGY6vG2W3KzgZSLW4GusbG+D6bB4lZMJjD2Ltd7d1wlrqCpzI/S5A9K/KtntLbEODW+IkRRb0pAVzesCxPgBV0jzCq3IA1JNgBqSegA4mu4bgbIfC4RRKuV3OZlI7yKblVPj3mNuRciiG/ex1kaRAiyWt2gwjAsP1wma2taRXvr119tWQpd6LNRZqSWqheahTeahQNA1nd/cYYtny2Or5Yx9tgG/dzVf5qw3wqykYaJPnS3P2Ub+apRy+jFJNGKwpVFQvQvQPYXEtG2ZfIjkw6GrvZu0p8LmlwMxUMAHUKrEWuRdHDDS5sRcjXW2tZ6nIZWQ5lNj9/n1qjZbkbGixrvPi+1ltNGjJCxzkzFj2shHeyZhYkWtc1tdu/CLh8EThNnwBmVmUvl/No+t7KDmlbNxNxc31Jrk8OIVjmDtC5BBZGIVweINiNDbmR4ljVxurifiMryPdc0TIk0cYl+LOWVg+Q2JWylSejaXoOs7ipj3Z8TjixV1HZiU5WReNhCqhVvpcsA2lhca07NHsubH5XVcTin4ZgZViWO/An82gU30HeuTxNc33j30n2lPHhMPO0UDtHESR2fas7BGd8pvk718l+A18NZs2DZmycMcVIZJnSVogZo+/2qfIjQ2CgZSQx4akGiL/b+0oMNNFAcxeVgqqiM+XMcqliPRBJ59D0p5lINiLVWbm73z7TnfJh0jgj9MszM5LZsgVhYFtASLaDnqKj72794PCSFFQzy2AbszlVACbXc6E3J0UHgbkVrYur0d6yuxt9IZ7BhlY8gdfWp5+Cl/VTWP38gjJSOOR2GhzL2YB6EN3gfNabiaaxxeszKTgp81vzEz2ccopXPpeCubeT2PyjWaxm/mJc/m0RB+rnPtOnupK75vKOyxcSOj91ygIOU6HS5BqKqd7Nmx4TGGR488UoLgAaZmsWHhe5PUZtOFY8V1KfCfG8O+DlcM8YDwyHXtIyCUe446XB8n6iucYfAO0ph0VgSDnJAUg5bEgG2pAvw8bVLFFgFvIo6hh7UatHu3um+0EZ0cqzO6JaPMgdEz/nG+QGBsDb28KzWDYpIp4ENbXTKT3fcT7quN3TjkkZcDK6MrAEJKEV2BIRWViFcmxsCDQb/AHGwGNwcgixU8mFRELFZGRo3OewVWkzJw17hBrb4/e/Z8SHtMXA2mqq4dj9hMxPsrL7nb74jFyDB4nDI72cOQQhBRiGVo3uC1hqNPKrLb25GynHaSxrh9QMyP2KEnlb0NfK9VGL3qx+ztoNDh9nxRq8s47V0w3ZsqAG5zZRe9yeJ9GujrYAADQcPCq/AbBweFAbBxoLkBnDZ3K2PBySRqAenhVgTV0lAmiJoE0RqqF6FFQoGL1Wbe3Uj2iiB5HQoXyMgDLdgvpIePDqOdWF6T8dmifMsJliKjN2RHaxvc5myMR2ikZdAbjKdDepUjne0vgtxsdzC8cw+q2Rz9l9P3qye0dhYrDfp8PIgHynjIX9v0T6jXoTZ224JzlSVC44o145U/WiezD2VY57aXI8xU008s0L16Sx+wcJPrJhoXPXIqt+0LGs7jPg0wMnorLH/ANuTMP8AcDaeupocPoV1bFfBKp/Q4y3QSRf+yt/CqbFfBXjl/RtE4+rIVJ9TqB76aGDBp6DEunoMRztxBPip0PrFXeK3I2jHctg5Db6NRJ/+ZaqmfZk8f6SCRP14nX7xQOnGJJ+kjBPz0vm8zc94+Z/CpOJMmIC/9U8uW4RJpHdkFtQmby6LwqnJtoSB5mhnHUe0UHRsPvpJh8F8UWGRW+L/ABcLGE7MOQw7YSIc4cglittTzHGsngsJJLH2bIe7qjEi66XZbE8LWPLQHjZaRsHGyJJ3HPo5QBZgMzKCBcHLpc6dKstn4TESyJJ+T53ZSpBjgksQPk6iwB4G5I1NA5uVum2OxhhkuscQDzMuhKn0FU8i/tAB5iu6/kPDFFQ4eIqoCqGjVrAcB3gaoNzMBPhUkBwjhncEPLLGucKDYtluykksbZTxrR9niH9KRIx0iTO48pJO7/t0RW4ndHAMpL4SJQBcsFCWHXMtrVi9rbhwTsv5OLgE993u2HC9Udu856ZMw6kV0hNmR3DODIwNw0zF8p6qrd1D+qBUmR6o4Xh2lwknZSqVlwxLKNe/Cf0iDTvLYB1txy2qu37wHZyJi4SQsosShtqV01HVbj7B610D4U8PkjixyjvROEbqyN6I8RmuPtms3Hh1xWAkw665P0X6jASQ+oXVftGiuZqxBuOINx5jWtJsXeKTZ8rPHHG6vkfLKpsCpORlIIKtq3mDwrN1cbNxaxPh8Q6l1jbK6qcrWF7ZTwDBTcHr67ZHVtlb8bOxjBsVH8WnQHvsMpQlSpyzpYgWJHetxpneD4NFxb9rFj5WvyxRM4APzHzAgeBvULZm1dh4uNI8UzCRFCdrisyPIqm4zOhKnXWzGtNtjYk2MjQYLarIihQOzCPnCgWJljKsTpfiQa17RX7F3Zw+zMqRkySy3VpWGWwVS1lX5KkgaXJ6k2FXhao0hGEWLDvLJM8jFRLIEvdUZyNALCyHTU9TTl62HM1FmpsmklqB3NQpnNQoAKUkrIbqf60gCgVoBtHEYaRP+shiZR8qTKMviC3D21RptPZgYpDtSaA8bCd3T1GUOlvAGsN8I0rfHctzZY1sOQuWJt5/wFZpcUeetYtHccNLK4/6ba2Gm/7scbHyvC6fdUonaMepw8Eg6w4h4yfJHUj96uELKjXLIun1fwqThdrtH+jmnj8UkdQPUrfwqbNO2f4hmj/TYLFIOojSdf8AbZj7qfg3wwbEB5kRuGWcNA1/KQLXLMLvntGKxXF9ovSaNHB82sG99X2F+EtiMuLwKOObQtx+w9//ACqjqeHxiOLowYdUYMPaKkrOPne2uXYfb+wZjd4Rh2bjeF4mv4vDp671d4OLZ76YbasieCbRLW+zIWoNq8cbekiN+sin7xTYwkA4RRD/AOtPwrOfkmQ/o9rzW8RhX95SkNsbFf8AzD+vD4U/+lBrY2RfRCr+qAPupRnHWq3BoyRIrSByoALkKucjQsQugPlTOI2nFGCZJ4U655EX23NBbmYcr0kynpbzNZDGb97Pj9LGIx6Qqz+9ARWfx/wq4ZbiGCWQ8jIVRT7yfdTcXTpbTDm3qFNzYhUUuxVFHFpGAA9ZriW0PhNxslxEI4R9RM7j7T6e6sptHak2IOaeZ5D9dyR6l4D1CmzToHwm754fEQnB4du1JZWeQeguQ3AQ/KJ6jSoG4WIvkUn9JE6faifu+u0ieyueyGtZuTOFCm9smIUMeizpkX99EqS9is3s2f2GLcAWV++vk5J9zBh9moWCGdHj5kZl4ekvIeJ7o9tdI3+2P2+H7ZB34wX05of0i/ZIzeQPWuYYeUo4bXQ8uNuBHsvSjebq7M2bPCqYmaFA6EMzTBMUmIzm2XOLdnktbkeevHUY7dHHYWB02ZjA0cneZXVFkY2sSkwFsxsNe75iue7D2EmKndXL5AI2CwBWdxI4S4vcBFJJLWOgB53rqWwdg4XZQJbaTZQWukkyIik6ape1xb21YiLsXZ82HgSTauJDvmUYdHZWaKR1KAFxrI5D2tqF6nlcGoW1t9dlnuPIsxU51WONnAZdQQ1stx51JjkDqHXgwDDyIuK1EpdqK1FeivVUdqFJvQoMqN9B/wDzn/U/40f+NV+gb/UH8tZC3h7qFvD3V5/yV2/HELfDaAxOKMoQrdEFib8L86oqnbW/SfZH8ag1rbnZqnoGFyDzGhPAEEML+y3rp6WDIMw9E8PA/NP98Kh06sTHUIx8lJprvZvrRSzEU+mMI40WzII3lVJZBGmt3dSQpAJAIGtiQF8L35VZb17JXDvG8aGNJ4UlWJ2JeAkWdGzHMRmBIJ5HwNXaIzTLlBKg3vzHKocpQ/IHqpAPc8if4U3ersJdByFIy06aQRUADtbLmNumY29lEFHSjtQqAClikXos1UO3pBkpzB4KSZskUbO3RFLW8TbgPE1dYfdOYzLDOVhLRtKSxDlUU2NwpsPbQZ1mq63WmXtmhdrLOhjuD6L8UYeN9B4mlbU2RFE8XZyl0fN3msM2XmPAnSq6UMHXgLNpl5W1H3U9DuO7xd40+MKAxBvqCCwujMLcA1g1jXL9992mweJsi/m5LmOw0XqnquPUR0Nb3djbIxMIkGjXs6j/AC5Bz/Vbj/Zq+2nsuPaGH7KQ2YG6uPSjcDQ25jUjxBIrV7HGYmCRKVd0lj/zI3ZSitoF0I46Aa8AOGtoWIiMcZz6tI2a9yc6g3uepuOJv6dXI3fkw2LfDYkZQyOc17K682RuembxHeuNLHTbG+DefGkT4lvi8RAyRhAZig4XB0Qka65iL2sABU0OZo1iD04+I5j2XrpWzN7hHBHGYs2REXN2mXOAos1sptcWNq12H+DfZ0XGFnPWWRzf1KQPdVTvtutBBhhNhYVTIwDhL2KMbcCeTMD62p3J0s1b2g/40H0H+5/xof40H0B/1P8AjWOv4Cj9lY866eEa/wDxoPoP9z/jQrIXoU86eEDtfAez+tDtfAUzehesdN9pOzN3/j80iiTsykSv6BfN3iLWBB9l6i7T3SmgsS8ToWy5o5NVOvpI1mHA8q0G4ZBxcyEEhsKbi5BNpF5jX5XKtHhJ48Tip1kQOsMR7MSRmYjJIochRq5JY252C05eScfHctb043vLTAYTAJHwFz85tT6ulWCIT/HwroEOyIkOIiYRos0xjS9yVBhDoENu6QzAkaWsR0qtfF9pho1kKq7TxwTksAWSEkqzeAz6t9WuHF8/zv8AHHc3/scs8Ne6zqbJkkcJ2Ds4swGRg6gHRr8VF7a1V72bPALzStN23cDiXvi/dUXJ7yjLqL3HLmK6ZJtCCSUyKxc5Z4GUqSZFa7x27O5KXuoI11rMbxyJNM7akOiB0dSpjIQKyEEDhbjXp+Jycvyc/HLDxmt719/pw5OTHim5lvv1/TmkfBh5H77/AMKaqXiPzXaRFbtmAD3+SNRceI19dQia166r1eyr0ktRVttm7lxdmr4zFCBnUskd1DBQL3bMddNSANOtVWKJp/AYN55FiiTO7XsoIF7C51JsNAa1mxVhwGF+Psgnd5Gjw+YZVCIWBexBKk5W8eA5mtHDHHJtHBYpIwjTYZ3cDp2Yyk9T3yL87CmhhMHu67/GhI2RsKhZlK5ixAawBuLA2466EVcRbrxMNntHmIxB/PZmv6IVmAAAsMqyD1C9aTH4uLEbNxGOjFmlgEcgvwZCVynxGc68xlqk2JvXBh9nLGxJxEfaiIBGOUvmysW4Ze+RxvYcKuoi12JjVabaEylkRTFChgjzMiqWUdmoBvc68DxvVas5TG4mfJKAmEZgMU5aRiWDAkEnKDlPd0t0FZnYm802DjeOAIC7Bi7qWYWWwsL26nUHjVZj8fJO5kldnZrXJ0uBwFhpYVNi23g2jFPJHKSWBjGZFPoN09/7oqjllFxlFgOFNWoZalq6W2wdtvg5hIt2U911J0dfxHEH8TXaNibVWWNZYzdWGmvHqGHJhz8q4EFq93Z3gkwUl9WjYjOl+P1l6MPfwPhZkad22js6HHxqr6MjB43W2eJxYgi+nIXBFjzFPYDbbxyLh8cFSRjaOVbiHFfqk+hJzMZN+NiRVPsfaiSxrNBIGVufjzVl5N51fkx4lDFKisrCzI4zKR6xY/0rSLSRLiqvauFEsEsLcHR08sykA1DGDxWFFsNIs0Y4RYt2DoNNExABa3g6sfrVC2htXGyK0ceB7N2BUSSYmNo0vpmyxku3G9so4cqI5BHiMyhso1APA8xfrSu1+qvsNWG3tnrBO0K6hEiS/UrEgPrveq/sq4XUembsH2vgvs/rQouxNCpuLqnPi79KL4u/Sl2/u1EV/u1Z23pcbjowx7i2rYVwP9SPnUSCWSNiyuysbglGKk3OoJHiKh4baUmDlWeJVZsrIyuDZlYgnUEWN1FXe7CR4/FIrgxrI73UG5U2Zgt9NDYC/jXo4vHKWV4+fHKXaYcdB2AUR5pcq95owwVw4LlszESZgBxXTUag6WS7xxrqmFS4LFbhFC99njNlFrr3Bpxy871vIt2sMgWMYWG2urosjaWvqy5idetUe0tjwxYopHs8zZos9g+SNPSU6ejmJAPK17jhXfDLD1p5c8cpN7UTbXxEis6xIqHIFMjhAoj7yZXYrezXa/jbhWax7sHfOAGztmANwDc3ANzp660nxXtM0UyyI6OgmSBDIyqI3VWFr5ls0anU+iT8qp2++7QbDR4zDWbLEvasAF7SMKCJiDzA1POx8K9uPLjhZPW3knFlyfyv043t39Ox6hL+eQfwtVdUnHyh5GccDa3kAAvuAqNXzM8t5Wz7r6mM1jIewJTtU7T0M6Z78MmYZr+q9dG3o3SlxeNed5UTD5FOdmB7JVTgF6Zrte4FmPPSuZVMm2rO8Yhed2jXghdioA4aX1tyvwqRpq9j7cwBwi4XGoXEDs0ZRWtKCzMDoRa+YizaWt6qrGb2TNi2xUQVO4Yo1ZQwjj5WHDNz6a1nb0tIif61LlpZjb6AStlyZjlvfLmOW/C+XhfQa+FJVSeAv5VJTDddakJHblXO8k+nTHit9oSYZjyPspwYXwNTFSl5Kxc67TixiCYD0pJgPSp5WiK1POtfjiuMB6UBEelWHZ0tYqv5GbxQ5sLbEuDfPGdD6aN6Eg6EdfHiPdXUNibzw4kAIwR+cchAYH6jcGH92FcxTDg8qcODBrc5Y53hrtI2qyi2b1OpHsI099VO296+xWwK5yDkVQSSeuugA6+6ucQzTIMqzygdBI9vVrpTeQlsxJJ5liST5k8aXmn0uPB+zjiSRi7kszEsxPEk6k0oYdun3U6rGlZjXPydfEz8Xbp7xQpy5oVNrpDzUL+NO5B4+yiyL1P7P9abXSLILnWpOysa+FlSZOKMrWPAlTcUkxr85v2P60ZjT55/Y/rSZ+N3EywmU1XV9n/CNFIgZ4mDLraMhlY5SLa2K8ed+HGsptbeLEYiQys5W6lQsbEKqtxXT0r8yfwrFSooOkjA9QpB9RBptpJLd3Et9pAffxr38Hy+LDvKdvm/I+Dy5WeOXX6XE8uhJOnEknT1mqfaO8cvZPhY5n7N7B1znIQDcKqngL8SLX4cOMGeB3PfkLed7DyHKmfyefne41ef5szmp1F4viZYI7cvJfuFJJqyOBBA79rAA6HW1KTAqPlj1o1eO8mMeicOVVioTyp1cP1q1XCr9IP9NqUMKn0g/Yas3ldZwyK5IrcBToQ1OGFX6Rf2W/ClfFl+evsf8Kxc3SYaQgvhSh5VL+LL9In7/wDLR/Fl+kT9/wDlqeUa8UUHwo8x6VIGFX6RP3/5aHxRfpE/f/lp5Q1UUsen30WfwqScKv0ifv8A4UQwg+kT2t+FTcXVMZj0pxSadXCj6RPa/wCFOJhV+kT9/wDCruHZKXp1QadTCr9Insf8KcXCr9Iv7L/hVmmezNjQF6kfFl+lH7DUXxZPpPYhq9HZsMaPMac7BPpG/wBMfzUfZR/Pf9hf5qbiapm56++hT/Zx/Of9hfxoU3DVI7c+FE0x8KiXoi1Z01tIaY+FJOI8BUdmpBYf2Kml2debwFI7XwHtpokf2KAHj7qniuy2k+r76R2vh76IgUkqOtPGGznbeFDtR0prKKIrTUXaQJh0pXajp91RQtLyjr7qahun+0HSi7QdKYy+IoZPEe+momzxkHT30O0HT30zk8R76PJ4imobOhx099DtB0prL4j30eXxFNQ2XmHSjzjpTWXxHvowviPfTUDyuOlLVx0qOF8R76UB4+6rqCakg6U4sg+bUJR4+6lgePuq9ImdqOlDtB0qJR28auoiV2o6UXbDpUe3jQsOtNRNpPbjpQqNYdaOmovZukmhQqBJpBoUKiioChQoBSDRUKBJoqFCooUKFCqBRihQog6I0KFQEaAoUK0g6OhQqKOlLQoVoLWnFoUKJShR0KFKBRGjoVAKFChVH//Z" alt="Shoes" className= "w-full" /></figure>
  <div className="card-body flex flex-col justify-center items-start">
    <h2 className="card-title text-black text-lg font-semibold self-center">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </>
  )
}

export default App

import React from "react";
import NewsAuthor from "../../ui/news-author/news-author";
import { Section, StyledTitle, StyledImg, Caption, NewsTitle, NewsSubtitle, Text, StyledUl, StyledLi, Blockquote } from "./styles";
import { TitleSize } from "../../ui/title/title";
import newsPhoto from "../../../assets/news.jpg"

function News() {
    return (
        <Section>
            <StyledTitle size={TitleSize.MEDIUM}>Новости</StyledTitle>
            <StyledImg src={newsPhoto}></StyledImg>
            <Caption>Победитель регаты шкипер Иван Кулешов</Caption>
            <NewsTitle size={TitleSize.SMALL}>Итоги регаты Sochi Race Week 2020</NewsTitle>
            <Text>
                Свыше сотни участников собирались на побережье Сочи, чтобы посоревноваться за главный приз. 
                В соревнованиях приняли участие как новички, так и моряки, имеющие за плечами немалый опыт.
            </Text>
            <Text>
                На протяжении всего плавания нас сопровождало солнце прекрасная погода, в отдельные дни ветер до 20 узлов. 
                Регата была прекрасно организована, 135 яхтсменов, 7 экипажей, 9 стран участниц, 4 гоночных дня, 3 дивизиона.
            </Text>
            <NewsSubtitle size={TitleSize.TINY}>Команды-участники:</NewsSubtitle>
            <StyledUl>
                <StyledLi key={0}>Восток 35</StyledLi>
                <StyledLi key={1}>Fortune Sailing</StyledLi>
                <StyledLi key={2}>Сибирь</StyledLi>
                <StyledLi key={3}>Левиафан</StyledLi>
                <StyledLi key={4}>Черный лебедь</StyledLi>
                <StyledLi key={5}>White Pepper</StyledLi>
                <StyledLi key={6}>Pearl</StyledLi>
            </StyledUl>
            <Text>
                Чемпионом регаты Sochi Race Week 2020 стала команда Fortune Sailing, в прошлом году 
                остановившаяся в одном шаге от победы, а в этом сезоне опередившая ближайшего соперника — 
                экипаж «Восток 35» — на 5 баллов.
            </Text>
            <Blockquote>Мы в команде очень дружны и понимаем друг друга без слов, думаю, поэтому мы и победили</Blockquote>
            <Text>Поздравляем победителей и ждем все участников снова на осенних регатах!</Text>
            <NewsAuthor name={"Артем Колесников"} date={"20.06.2021"}></NewsAuthor>
        </Section>
    )
}

export default News;
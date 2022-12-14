package com.antjump.ant.remembrance.model.dto;

import java.sql.Date;

/**
 * <pre>
 * Class : ArticleDto
 * Comment: 클래스에 대한 간단 설명
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-13       이상학           최초 생성
 * </pre>
 *
 * @author 이상학(최초 작성자)
 * @version 1(클래스 버전)
 * @see
 */

public class RemembranceDto {
    private int remembranceId;
    private Date remembranceDate;
    private int fkSprintsRemembrances;

    public RemembranceDto() {}

    public RemembranceDto(int remembranceId, Date remembranceDate, int fkSprintsRemembrances) {
        this.remembranceId = remembranceId;
        this.remembranceDate = remembranceDate;
        this.fkSprintsRemembrances = fkSprintsRemembrances;
    }

    public int getRemembranceId() {
        return remembranceId;
    }

    public void setRemembranceId(int remembranceId) {
        this.remembranceId = remembranceId;
    }

    public Date getRemembranceDate() {
        return remembranceDate;
    }

    public void setRemembranceDate(Date remembranceDate) {
        this.remembranceDate = remembranceDate;
    }

    public int getFkSprintsRemembrances() {
        return fkSprintsRemembrances;
    }

    public void setFkSprintsRemembrances(int fkSprintsRemembrances) {
        this.fkSprintsRemembrances = fkSprintsRemembrances;
    }

    @Override
    public String toString() {
        return "RemembranceDto{" +
                "remembranceId=" + remembranceId +
                ", remembranceDate=" + remembranceDate +
                ", fkSprintsRemembrances=" + fkSprintsRemembrances +
                '}';
    }
}

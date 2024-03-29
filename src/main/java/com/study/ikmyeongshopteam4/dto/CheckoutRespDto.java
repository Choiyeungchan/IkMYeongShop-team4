package com.study.ikmyeongshopteam4.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class CheckoutRespDto {
    private int pdtDtlId;
    private int pdtId;
    private String pdtName;
    private int pdtPrice;
    private String pdtDesign;
    private String saveName;
}
